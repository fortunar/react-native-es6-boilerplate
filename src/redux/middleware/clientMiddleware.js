import { Actions } from 'react-native-router-flux';

export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});

      const token = getState().globals.auth.token;

      const actionPromise = promise(client, token);
      actionPromise.then(
        (result) => {
          return next({...rest, result, type: SUCCESS});
        },
        (error) => {
          // console.log(error, 'THEN');
          if (error.status === 401) {
            // redirect user to login
            // dispatch(removeToken());
            Actions.login({type: 'reset'});
          }
          return next({...rest, error, type: FAILURE})
        }
      ).catch((error)=> {
        // console.log("ERROR");

        next({...rest, error, type: FAILURE});
      });

      return actionPromise;
    };
  };
}
