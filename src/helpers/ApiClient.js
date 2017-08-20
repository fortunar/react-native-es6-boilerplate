import config from 'src/config';
import {buildUrl} from 'src/utils/url';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;

  return globalApiHost + adjustedPath;
  // Prepend `/api` to relative URL, to proxy to API server.
  // return '/api' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor(req) {

    methods.forEach((method) =>
      this[method] = (path, { plainUrl, params, data, formData, token, multiPart, customHeaders } = {}) => new Promise((resolve, reject) => {

        let urlWithQuery;
        if (plainUrl) {
          urlWithQuery = path;
        } else {
          urlWithQuery = buildUrl(formatUrl(path), params);
        }

        let properties = {
          method: method,
          headers: {
            ...customHeaders,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }

        if (data) {
          properties.body = JSON.stringify(data);
        }

        if (token) {
          properties.headers['X-Spree-Token'] = token;
        }

        let status;

        fetch(urlWithQuery, properties)
        .then((response) => {
          status = response.status;
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          if (res) {
            if ( res.ok == false || res.error ) {
              // resolve({headers: res.headers, body: res})
              reject({status: status, response: res});
            } else {
              resolve({headers: res.headers, body: res})
            }
          } else {
              reject('Empty response');
          }
        }).catch((err)=> {
          reject(err)
        })
      }));
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
