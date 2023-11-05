// import React from 'react';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

function Dash({ navigation }) {
  return (

    <View style={styles.container}>
      {/* <Text style={{ color: 'black' }}>Welcome to the Dashboard</Text> */}

      {/* <Text style={{ color: 'black' }}>
        Welcome to QRcode scanner
      </Text> */}
      <View style={styles.buttonContainer}>
        {/* <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Signin')}
          style={styles.button}
        /> */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={{ color: '#000' }}>Sign In</Text>
        </TouchableOpacity>
        {/* <View style={{ height: 20 }} /> */}


        {/* <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
          style={styles.button}
        /> */}


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: '#000' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>



    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'indigo',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // height:40,
    width:'100%',
  },
  button: {
    marginVertical: 10, // Adds vertical spacing inside the buttons
    width: '60%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 40,
    backgroundColor: 'lightblue',
    color: 'black',
    // marginTop: 30,
    //  paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
export default Dash;
