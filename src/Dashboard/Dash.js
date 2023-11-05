// import React from 'react';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
function Dash({ navigation }) {
    return (

        <View style={styles.container}><Text style={{ color: 'white'}}>Welcome to the Dashboard</Text>

        {/* <Text>
            Welcome to QRcode scanner
        </Text> */}
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Signin')}
            style={styles.button}
          />
          <View style={{ height: 10 }} /> {/* Add space above the second button */}
          <Button
            title="Go to Signup"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
          />
        </View>
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginVertical: 10, // Adds vertical spacing inside the buttons
    },
  });
export default Dash;
