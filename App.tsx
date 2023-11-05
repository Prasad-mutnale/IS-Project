/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './src/Signup/Signup';
import Signin from './src/SignIn/Signin';
import Dash from './src/Dashboard/Dash';


// export type RootStackParamList = {
//   Signup:undefined,
//   Sigin:undefined,
// }

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Signin"> */}
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Dash" component={Dash} options={{title:'Dashboard'}}/>
        <Stack.Screen name="Signin" component={Signin} options={{title:'Sign In'}}/>
        <Stack.Screen name="Signup" component={Signup} options={{title:'Sign Up'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

//   return (
//     <View style={styles.centerContainer}>
//       <Text>
//         Hello world
//       </Text>
//     </View>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import sdk from '../AwesomeProject/src/config/appwrite';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   TextInput,
//   Button,
//   Text,
// } from 'react-native';

// import { Client, Account, ID } from 'appwrite';







// function App() {
//   const [alert, setAlert] = useState('');
//   const [name, setName] = useState('');
//   const [userId, setuserId] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [ uid, setuid] = useState(2);


//   const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('6545f5d4d8cb0b6f94c1');              // Your project ID

//   const account = new Account(client);




//   function handleSubmit() {
//     //   sdk.account
//     //     .create(email, password, name)
//     //     .then(setAlert('User created successfully'))
//     //     .catch(setAlert('User created successfully'));
//     // setuid(uid++);
//     const promise = account.create(userId, email, password, name);

//     promise.then(function (response) {
//       console.log('Created successfully=======>>>');
//       console.log(response); // Success

//     }, function (error) {
//       console.log('error!!!!');
//       console.log(error); // Failure
//     });


//   }

//   return (
//     // <SafeAreaView>
//       <View style={styles.centerContainer}>
//         <Text>{alert}</Text>
//         <TextInput
//          placeholder="User Id"
//          onChangeText={nameText => setuserId(nameText)}
//           // eslint-disable-next-line react-native/no-inline-styles
//           style={{
//             width: '90%',
//             height: 55,
//             borderWidth: 0.5,
//             borderRadius: 20,
//             marginTop: 30,
//             paddingLeft: 20,
//           }}

//         />
//         <TextInput
//           // eslint-disable-next-line react-native/no-inline-styles
//           style={{
//             width: '90%',
//             height: 55,
//             borderWidth: 0.5,
//             borderRadius: 20,
//             marginTop: 30,
//             paddingLeft: 20,
//           }}
//           placeholder="Name"
//           onChangeText={nameText => setName(nameText)}
//         />
//         <TextInput
//           // eslint-disable-next-line react-native/no-inline-styles
//           style={{
//             width: '90%',
//             height: 55,
//             borderWidth: 0.5,
//             borderRadius: 20,
//             marginTop: 30,
//             paddingLeft: 20,
//           }}
//           placeholder="Email"
//           onChangeText={nameEmail => setEmail(nameEmail)}
//         />
//         <TextInput
//           // eslint-disable-next-line react-native/no-inline-styles
//           style={{
//             width: '90%',
//             height: 55,
//             borderWidth: 0.5,
//             borderRadius: 20,
//             marginTop: 30,
//             paddingLeft: 20,
//           }}
//           placeholder="Password"
//           onChangeText={namePassword => setPassword(namePassword)}
//         />
//         <Button style={styles.centerContainer} title="Sign Up" onPress={() => handleSubmit()} />
//       </View>
//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   centerContainer: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor:'blue',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//   },
//   input: {
//     // borderWidth: 1,
//     // borderColor: '#ccc',
//     // padding: 10,
//     // margin: 10,

//     width: '90%',
//     height: 55,
//     borderWidth: 0.5,
//     borderRadius: 20,
//     marginTop: 30,
//     paddingLeft: 20,
//   },
// });

export default App;
