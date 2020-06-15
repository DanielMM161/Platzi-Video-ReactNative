import React, {Component} from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import * as videosActions from '../../../actions/videosActions';

import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';

class Movie extends Component {
    state = {
        opacity: new Animated.Value(0)
    }
    closeVideo = () => {
        const {set_Selected_Movie} = this.props;
        set_Selected_Movie(null);
    }
    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1200
            }
        ).start();
    }
    render() {
        return(
            <Animated.View style={{flex:1, opacity: this.state.opacity}}>
                <MovieLayout>
                    <Header>
                        <Close onPress={this.closeVideo}/>
                    </Header>
                    <Player />
                    <Details {...this.props.selectedMovie}/>
                </MovieLayout>
            </Animated.View>
        )
    }
}
const mapStateToProps = ({videosReducer}) => videosReducer
export default connect(mapStateToProps,videosActions)(Movie);