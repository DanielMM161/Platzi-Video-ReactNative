import React from 'react';
import { View, Text, Image,StyleSheet, SafeAreaView, StatusBar} from 'react-native';

function Header(props) {
    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />  
                <View style={styles.right}>
                    {props.children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    },
    containerLogo: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});
  
export default Header;