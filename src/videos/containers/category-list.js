import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Layout from '../components/category-list-layout';
import Category from '../components/category';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import { connect } from 'react-redux';

class CategoryList extends Component {

    keyExtractor = item => item.id.toString()
    renderEmpty = () => <Empty text="No hay categorias :(" />
    itemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return(
            <Category {...item}/>
        )
    }

    render() {
        console.log('PROPS', this.props)
        return(
            <Layout title="Categorias">
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.categoryList}
                    ListEmptyComponent={this.renderEmpty()}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}    
                />                
            </Layout>
        )
    }
}
const mapStateToProps = ({videosReducer}) => videosReducer
export default connect(mapStateToProps)(CategoryList);