
//>> Importing libraries
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import { useEffect } from 'react'
import Lottie from 'lottie-react-native'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';

//>> Importing Components
import { isIOS } from '../../constants';

export const SplashScreen = () => {
  const State = useSelector(state => state.starter.State);
  const navigation = useNavigation();

  //>> Navigation to the corresponding component.
  useEffect(() => {
    if(State !== null) {
      setTimeout(() => {
        switch (State) {
          case 0:
            navigation.navigate('WelcomeScreen');
            break;
          case 1:
            navigation.navigate('VerifyEmailScreen');
            break;
          case 2: 
            navigation.navigate('ApplicationTab');
            break;
        }
      }, 4000);
    }
  }, [State]);

  return (
    <View style={styles.root}>
      <Image source={require('../../../assets//logos/adaptive-icon.png')} style={styles.imageStyle}/>
      {
        isIOS ? <ActivityIndicator size="large" color="#A375FF" style={{marginTop: 19}} />
        :
        <Lottie source={require('../../../assets/loader.json')} loop speed={0.75} autoPlay style={styles.animationStyle} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  animationStyle: {
    marginTop: '34%',
  }
})