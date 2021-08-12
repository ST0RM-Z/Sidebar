import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyDrawer from './Components/Drawer'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

 
import { Platform,  
Image, TouchableOpacity, Alert } from 'react-native';  
export default class App extends Component  
{  
  constructor(){  
    super();  
    this.state={  
    isVisible : true,  
   }  
 }  
  Hide_Splash_Screen=()=>{  
   this.setState({   
     isVisible : false   
   });  
 }  
   
 componentDidMount(){  
   var that = this;  
   setTimeout(function(){  
     that.Hide_Splash_Screen();  
   }, 5100);  
  }  
  
   render()  
   {  
       let Splash_Screen = (  
            <View style={styles.SplashScreen_RootView}>  
                <View style={styles.SplashScreen_ChildView}>  
                      <Image source={require('./assets/splash.gif')}  
                   style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
               </View>  
            </View> )  
        return(  
                           <NavigationContainer>
            <MyDrawer />
            
              
                {  
                 (this.state.isVisible === true) ? Splash_Screen : null  
               }  
  </NavigationContainer> 
          
             );  
   }  
}  
const styles = StyleSheet.create(  
{  
   MainContainer:  
   {  
       flex: 1,  
       justifyContent: 'center',  
       alignItems: 'center',  
       paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
   },  
  
   SplashScreen_RootView:  
   {  
       justifyContent: 'center',  
       flex:1,  
       margin: 0,  
       position: 'absolute',  
       width: '100%',  
       height: '100%',  
     },  
  
   SplashScreen_ChildView:  
   {  
       justifyContent: 'center',  
       alignItems: 'center',  
       backgroundColor: '#ffff',  
       flex:1,  
   },  
});  