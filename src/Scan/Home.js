import * as React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import styles from './../styles/Style';
import { useState } from 'react';
// import { AsyncStorage } from 'react-native';
import {AsyncStorage,Text} from 'react-native';
import { useEffect } from 'react';



function Home({ navigation }) {
    // const [userid, setuserId] = useState('');
    // const data = AsyncStorage.getItem('userId');
    // setuserId(data);
    // console.log(navigation.params);
    // const { userId } = navigation.params.userId;

    // console.log('After user', userId);


//    const retrieveData = async () => {
//         try {
//           const value = await AsyncStorage.getItem('userId');
//           if (value !== null) {
//             // We have data!!
//             console.log(value);
//             setuserId(value);
//           }
//         } catch (error) {
//           // Error retrieving data
//         }
//       };

//       retrieveData();

//       useEffect(()=>{
//         retrieveData();
//       });
    return (
    <View style={styles.container}>
        {/* <Text>User Details</Text> */}
      {/* <Text>{userId}</Text> */}
        <Button
        title="Generate"
        onPress={() => navigation.navigate('Generator')}
        icon={{ ...styles.iconButtonHome, name: 'qr-code' }}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
        />
        <Button
        title="Scan QR"
        onPress={() => navigation.navigate('Scanner')}
        icon={{ ...styles.iconButtonHome, name: 'qr-code-scanner' }}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
        />
    </View>
    );
}

export default Home;
