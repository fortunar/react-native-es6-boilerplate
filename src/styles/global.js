import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20
  },
  contentSidePadding: {
    paddingRight: 20,
    paddingLeft: 20
  },

  /*
   Buttons
   */

   button: {
     borderRadius: 5,
     paddingTop: 16,
     paddingBottom: 16
   },
   buttonDefault: {
     backgroundColor: '$color.blue'
   },
   buttonOrange: {
     backgroundColor: '$color.orange'
   },
   buttonDefaultInactive: {
     backgroundColor: '$color.blueLight2'
   },
   buttonText: {
     color: 'white',
     textAlign: 'center',
     fontSize: '$text.lg',
     fontFamily: 'BrandonText-Medium'
   },
   buttonGrey: {
     backgroundColor: '$color.grey3'
   },
   buttonGreen: {
     backgroundColor: '$color.green'
   },

   /*
    Shadows
   */
   containerShadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  /*
   flex
  */

  flexRow: {
    flexDirection: 'row'
  },

  /*
   colors
  */

  colorGreen: {
    color: '$color.green'
  },

  /*
    Spinner
  */

  spinner: {
    alignSelf: 'center',
    height: 80
  },

  /*
    error
  */

  errorMessage: {
    padding: 10,
    textAlign: 'center'
  },

  /*
    error
  */

  space15: {
    height: 15
  },

  /*
    Text
  */ 
  textMedium: {
    fontFamily: 'BrandonText-Medium',
  },
  textLight: {
    fontFamily: 'Brandon Text',
    fontWeight: '400'
  },
  textRegular: {
    fontFamily: 'Brandon Text',
  },
  textBold: {
    fontFamily: 'Brandon Text',
    fontWeight: '900'
  }
})
