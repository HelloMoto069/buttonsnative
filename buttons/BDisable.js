import React, { useState } from 'react';
import { Text, View, Button, Alert, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Collapsable } from 'react-native';


export default function BDisable() {

    const [text, setText] = useState("");

    const handleButton = () => {

        const result = text.toLowerCase();
        const a = result.split('');
        const b = a.reverse();
        const ans = b.join('');

        if(text.length===0){
            return alert('Pehle Likho To..!!!')
        }

        alert(ans === text.toLowerCase() ? "Palindrome Hai..!!!" : "Palindrome Nahi Hai..!!!");
    }

    return (

            <View>
                <Text collapsed={false}>Check It's Palindrome or Not</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => setText(e)}
                    placeholder="Enter Your Text Here"
                />
                <View>
                   
                        <Button color="#f194ff"
                            title="Check Karo"
                            onPress={handleButton}
                        />
                    
                    <TouchableWithoutFeedback disabled={!text} >
                    <Button color="#f194ff"
                            title="Check Karo"
                            onPress={handleButton}
                        />
                    </TouchableWithoutFeedback>
                </View>

            </View>
            );
};


            const styles = StyleSheet.create({
                input: {
                height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
    },
});