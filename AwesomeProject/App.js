// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { useCallback, useState } from 'react';
// import { View, Button, Alert, Text, SafeAreaView } from 'react-native';
// import SInfo from 'react-native-sensitive-info';

// import {
//   Colors,
//   Header,
// } from 'react-native/Libraries/NewAppScreen';

// const App: React.FC = () => {
  
//   const handleAddUsingSetItemOnPress = useCallback(() => {
//     SInfo.setItem('key1', 'value1', {
//       sharedPreferencesName: 'exampleApp',
//       keychainService: 'exampleApp',
//     });
//   }, []);

//   const handleReadingDataWithoutFingerprint = useCallback(async () => {
//     const data = await SInfo.getItem('key1', {
//       sharedPreferencesName: 'exampleApp',
//       keychainService: 'exampleApp',
//     });

//     Alert.alert('Data stored:', data);
//   }, []);

//   const handleSetItemUsingTouchIDOnPress = useCallback(async () => {
//     try {
//       const deviceHasSensor = await SInfo.isSensorAvailable();

//       if (!deviceHasSensor) {
//         return Alert.alert('No sensor found');
//       }

//       const data = await SInfo.setItem(
//         'touchIdItem',
//         new Date().toISOString(),
//         {
//           sharedPreferencesName: 'exampleApp',
//           keychainService: 'exampleApp',
//           kSecAccessControl: 'kSecAccessControlBiometryAny', // Enabling FaceID
//           touchID: true,
//           showModal: true,
//         },
//       );

//       Alert.alert('data successfully stored', data || '');
//     } catch (ex) {
//       Alert.alert('Error', ex.message);
//     }
//   }, []);

//   const hasTouchIDItem = useCallback(async () => {

//     try {
//       const hasItem = await SInfo.hasItem(
//         'touchIdItem',
//         {
//           sharedPreferencesName: 'exampleApp',
//           keychainService: 'exampleApp',
//           kSecAccessControl: 'kSecAccessControlBiometryAny', // Enabling FaceID
//           touchID: true,
//           showModal: true,
//         },
//       );

//       Alert.alert(hasItem ? "Item is present" : "item is not present");
//     } catch (ex) {
//       Alert.alert('Error', ex.message);
//     }
//   }, []);


//   const getTouchIDItem = useCallback(async () => {
//     const deviceHasSensor = await SInfo.isSensorAvailable();

//     if (!deviceHasSensor) {
//       return Alert.alert('No sensor found');
//     }

//     try {
//       const data = await SInfo.getItem('touchIdItem', {
//         sharedPreferencesName: 'exampleApp',
//         keychainService: 'exampleApp',
//         touchID: true,
//         showModal: true,
//         strings: {
//           description: 'Custom Title ',
//           header: 'Custom Description',
//         },
//         kSecUseOperationPrompt:
//           'We need your permission to retrieve encrypted data',
//       });

//       Alert.alert('Data stored', data);
//     } catch (ex) {
//       Alert.alert('Error', ex.message);
//     }
//   }, []);

//   const [logText, setLogText] = useState('')
//   async function runTest(){
//     const options =  {
//       sharedPreferencesName: 'exampleAppTest',
//       keychainService: 'exampleAppTest',
//     };
//     let dbgText = '';
//     dbgText += `setItem(key1, value1): ${await SInfo.setItem('key1', 'value1', options)}\n`;
//     dbgText += `setItem(key2, value2): ${await SInfo.setItem('key2', 'value2', options)}\n`;
//     dbgText += `setItem(key3, value3): ${await SInfo.setItem('key3', 'value3', options)}\n`;
//     dbgText += `getItem(key2): ${await SInfo.getItem('key2', options)}\n`;
//     dbgText += `delItem(key2): ${await SInfo.deleteItem('key2', options)}\n`;
//     dbgText += `getAllItems():\n`
//     const allItems = await SInfo.getAllItems(options);
//     for (const key in allItems) {
//       dbgText += ` - ${key} : ${allItems[key]}\n`;
//     }
//     setLogText(dbgText);
//   };
//   runTest();

//   return (
//     <SafeAreaView style={{ margin: 10 }}>
//       <Button
//         title="Add item using setItem"
//         onPress={handleAddUsingSetItemOnPress}
//       />
//       <Button
//         title="Read data without fingerprint"
//         onPress={handleReadingDataWithoutFingerprint}
//       />
//       <Button
//         title="Add item using TouchID"
//         onPress={handleSetItemUsingTouchIDOnPress}
//       />

//       <Button title="Get TouchID Data" onPress={getTouchIDItem} />
//       <Button title="Has TouchID Data" onPress={hasTouchIDItem} />

//       <Text>{logText}</Text>
//     </SafeAreaView>
//   );
// };

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// export default App;
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const App = () => {
  const [text, onChangeText] = React.useState("parth demo text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="enter name"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;