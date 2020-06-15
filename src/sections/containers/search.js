import React, {Component} from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import * as videosActions from '../../../actions/videosActions';

class Search extends Component {
    state = {
        text: ''
    }
    handleSubmit = async () => {
        const {search_Movie} = this.props
        await search_Movie(this.state.text)
        console.log(this.props.selectedMovie);

    }
    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render() {
        return(
           <TextInput 
            placeholder="Busca tu película favorita"
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={this.handleSubmit}
            onChangeText={this.handleChangeText}
            style={styles.input}
           /> 
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})

const mapStateToProps = ({videosReducer}) => videosReducer
export default connect(mapStateToProps,videosActions)(Search);