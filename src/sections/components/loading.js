import React from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

function Loading(props) {
    return (
        <View style={styles.container}>
            <Image
             source={require('../../../assets/logo.png')}
             style={styles.logo}
            />
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10
    }
})

export default Loading;