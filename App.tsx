import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import { CustomTitle } from './src/components/CustomTitle.tsx';

function App(): React.JSX.Element {

    const [title1, setTitle1] = React.useState('Your Title');
    const [title2, setTitle2] = React.useState('Your Title');

    return (
        <>
            <SafeAreaView>

                <View style={styles.container}>
                    <CustomTitle title={title1} subtitle={'Typed text in the below Text Input'} color={'black'} fontsize={50} subcolor={'gray'} />
                </View>

                <TextInput style={{
                    width: 300,
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    margin: 10
                }} placeholder={'Enter Title'} onChangeText={(text) => setTitle1(text)
                }/>





                <View style={styles.container}>
                    <CustomTitle title={title2} subtitle={'Click on the below button'} color={'black'} fontsize={50} subcolor={'gray'} />
                </View>

                <View style={{ alignItems: 'center', width: '100%', marginTop:30,}}>
                    <TouchableOpacity
                        style={{padding:10, width:100, height:40, backgroundColor:'yellow', borderRadius:20, alignItems:'center', justifyContent:'center'}}
                        onPress={() => setTitle2('Hello From Button')}
                    >
                        <Text style={{color:'black' , fontSize:20}}>Set Title</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    );
}

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'lightgreen',
        padding:20,
        marginTop:50,
    },
});

export default App;
