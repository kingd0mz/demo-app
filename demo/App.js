import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function App() {

	  const [value, setValue] = useState("")
    const [ array, setArray ] = useState([])

    function addToArray () {
      setArray([...array, value])
    }

		return (
		  <View style={styles.container}>
  			<View style={{flex: 1, backgroundColor: 'cyan', width: '100%'}}>
          <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
          />
        </View>

        <View style={{flex: 1, backgroundColor: 'cyan', width: '100%'}}>
          <Button
            title="CLICK"
            onPress={addToArray}
          />
        </View>

        <View style={{flex: 9, backgroundColor: 'pink', width: '100%'}}>
          <ScrollView style={{flex: 1}}>
            <Text> List of Items </Text>
            {array.map((item) => {
              return(
                <Text>{item}</Text>
              )
            })
            }
          </ScrollView>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});