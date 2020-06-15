import React,{ Component } from 'react';
import { StyleSheet, ActivityIndicator  } from 'react-native';
import { Video } from 'expo-av';
import Layout from '../components/layout';

class Player extends Component {
    constructor() {
        super() 
        this._onLoad = this._onLoad.bind(this);
    }
    state = {
        loading: true
    }
    
    _onLoad(event) {
        this.setState({
            loading: false
        })
    }
    render() {
        return(
            <Layout 
             loading={this.state.loading}
             video={
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    useNativeControls
                    onLoad={this._onLoad}
                    style={styles.video}
                />
            }
            loader={
                <ActivityIndicator color="red"></ActivityIndicator>
             }
            >
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    video: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }
  });

export default Player;
