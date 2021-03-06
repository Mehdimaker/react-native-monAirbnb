import {
  Platform,
} from 'react-native';

// COLOR
const mainColor = 'rgb(255, 55, 84)';
const mainColorOpacity = 'rgba(255, 55, 84, 0.5)';
const secondColor = '#FFF';
const greyColor = '#CCC';
//DIMENSION
const marginDefault = 15;
const navbarHeight = Platform.OS === 'ios' ? 64 : 54;

export default {
  mainColor,
  mainColorOpacity,
  secondColor,
  greyColor,
  navbarHeight,
  marginDefault,
  navigationBar:{
    navigationBarStyle:{
      backgroundColor: mainColor,
      borderBottomColor: 'transparent'
    },
    titleStyle:{
      color: 'white',
      fontWeight: 'bold'
    }
  },
  tabBar:{
    backgroundColor: greyColor,
    //borderTopWidth: 2,
    //borderTopColor: greyColor,
  },
  container: {
    flex: 1,
    paddingTop: navbarHeight,
  }
}

/*
<Text style={Platform.select({
  ios: {
    marginTop: 10
  },
  android:{
    marginTop: 20
  }
})}/>
*/
