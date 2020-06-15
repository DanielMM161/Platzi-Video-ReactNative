import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform,  } from 'react-native';
import { connect } from 'react-redux';
import * as videosActions from '../actions/videosActions';

import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

class AppLayout extends Component {
    async componentDidMount() {
        const {categoryList,suggestionList, get_Categories, get_Movies } = this.props
        
        if(!Object.keys(categoryList).length) {
            await get_Categories(10);
        }
        
        if(!Object.keys(suggestionList).length) {
            await get_Movies();
        }
    
      }

    render() {
        if(this.props.selectedMovie) {
            return  <Movie />
        }
        return (
            <Home>
                <Header />
                <Search />
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
}
const mapStateToProps = ({videosReducer}) => videosReducer;
export default connect(mapStateToProps,videosActions)(AppLayout);