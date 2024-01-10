import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput} from 'react-native';
import { CustomTitle } from './src/components/CustomTitle.tsx';

function App(): React.JSX.Element {
    return (
        <>
            <SafeAreaView>
                {/* Use View instead of div */}
                <View style={styles.container}>
                    <CustomTitle title={'Hello IJSE'} subtitle={'This is subtitle'} color={'black'} fontsize={50} subcolor={'gray'} />
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
        padding:20
    },
});

export default App;
