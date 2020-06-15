import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as videosActions from '../../../actions/videosActions';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {

    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias :(" />
    itemSeparator = () => <Separator />
    viewMovie = (item) => {
        const {set_Selected_Movie } = this.props
        set_Selected_Movie(item)
    }
    renderItem = ({item}) => {
        return(
            <Suggestion 
             {...item}
             onPress={() => {this.viewMovie(item)}}
             />
        )
    }

    render() {
        return(
            <Layout title="Recomendado para ti">
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.props.suggestionList}
                  ListEmptyComponent={this.renderEmpty()}
                  ItemSeparatorComponent={this.itemSeparator}
                  renderItem={this.renderItem}    
                />
            </Layout>
        )
    }
}

const mapStateToProps = ({videosReducer}) => videosReducer
export default connect(mapStateToProps,videosActions)(SuggestionList);