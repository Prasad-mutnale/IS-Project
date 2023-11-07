import { Client, Account } from 'appwrite';
import React from 'react';
import { useState } from 'react';
// import sdk from '../AwesomeProject/src/config/appwrite';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setuserId] = useState('');
  // const [ uid, setuid] = useState(2);


  const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6547538a402b7c11d7b0');           // Your project ID

  const account = new Account(client);




  function handleSubmit() {


const promise = account.createEmailSession(email, password);

promise.then(function (response)  {
    Alert.alert('Successfully logged in');
    console.log(response); // Success
    console.log('User name====>',response.userId);
    setuserId(response.userId);
    // let userId = response.userId;
    // AsyncStorage.setItem('userId',userId);
    navigation.navigate('Home',{'userId':userId});
}, function (error) {
  let er = error;
  console.log('hhh', er);
    // Alert.alert(error);
    // Alert.alert(`${er}`);

    console.log(error); // Failure
});
  }




  return (
  //   <View style={styles.centerContainer}>
  //   <Text>Sign In</Text>
  //   <TextInput
  //     // eslint-disable-next-line react-native/no-inline-styles
  //     style={{
  //       width: '90%',
  //       height: 55,
  //       borderWidth: 0.5,
  //       borderRadius: 20,
  //       marginTop: 30,
  //       paddingLeft: 20,
  //     }}
  //     placeholder="Email"
  //     onChangeText={nameEmail => setEmail(nameEmail)}
  //   />
  //   <TextInput
  //     // eslint-disable-next-line react-native/no-inline-styles
  //     style={{
  //       width: '90%',
  //       height: 55,
  //       borderWidth: 0.5,
  //       borderRadius: 20,
  //       marginTop: 30,
  //       paddingLeft: 20,
  //     }}
  //     placeholder="Password"
  //     onChangeText={namePassword => setPassword(namePassword)}
  //   />
  //   <Button style={styles.centerContainer} title="Sign In" onPress={() => handleSubmit()} />
  // </View>



<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'green' }}><Text style={styles.heading}>Sign In</Text>

{/* <Text style={styles.heading}>
  Login
</Text> */}
      <TextInput placeholder="Enter Email"
      value={email}
      onChangeText={txt=>setEmail(txt)}
      style={{
        width: '90%',
         height: 50,
          borderWidth: 0.5,
           borderRadius:20,

            paddingLeft: 20,
            }}

            />




<TextInput placeholder="Enter password"
value={password}
onChangeText={txt=>setPassword(txt)}
      style={{
        width: '90%',
         height: 55,
          borderWidth: 0.5,
          borderRadius:20,
           marginTop:30,
            paddingLeft: 20,
            }}
            />

            <TouchableOpacity
            style={{
              width: '90%',
              height: 55,
               borderWidth: 0.5,
                borderRadius: 40,
                backgroundColor:'black',
                color:'#fff',
                marginTop:30,
                //  paddingLeft: 20,
                 alignItems:'center',
                 justifyContent:'center',
            }}
            onPress={() => handleSubmit()}
            >
              <Text style={{color:'#FFF', fontWeight: 'bold'}}>Sign In</Text>
            </TouchableOpacity>
    </View>

  );
};





const styles = StyleSheet.create({
    centerContainer: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor:'blue',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    input: {
      // borderWidth: 1,
      // borderColor: '#ccc',
      // padding: 10,
      // margin: 10,

      width: '90%',
      height: 55,
      borderWidth: 0.5,
      borderRadius: 20,
      marginTop: 30,
      paddingLeft: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'indigo',
      paddingHorizontal: '18%',
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white',
      marginBottom: 30,
      textAlign: 'center',
    },

    payBtn: {
      backgroundColor: 'white',
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    input: {
      height: 30,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 5,
      color: 'white',
    },
    label: {
      color: 'white',
      fontSize: 16,
    },
  });

export default Signin;


// function DetailsScreen({ route }) {
//   // Fetch user details and display them here
//   // route.params might contain user data passed from the login screen

//   return (
//     <View>
//       <Text>User Details</Text>
//       {/* Display user details here */}
//     </View>
//   );
// }





// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const promise = account.createEmailSession('email@example.com', 'password');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
