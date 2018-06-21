import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header'
import {connect} from 'react-redux';
import {fetchItems} from '../actions/items';
import { API_BASE_URL } from '../config';
import Card from './card'

export class Products extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchItems());
    }

    render() {
        //if the user had posted items, they will be displayed 
        //otherwise, a message will instruct them to navigate to topics
        let items
        if(this.props.items && this.props.items.length) {
            items = this.props.items.map((item, index) => (
            <Card key={index} product_name={item.product_name} 
            image={item.image} />
        ))
       }
        return (
            <div className="dashboard">
                <Header />
                <div className="dashboard-name">Welcome {this.props.name}</div>
                <div className="row">Items
                <section className="items-list">
                { this.props.items && this.props.items.length ? items : 
                    '' }
                </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.items
    };
};

export default connect(mapStateToProps)(Products);