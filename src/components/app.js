import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Products  from './products'
import {fetchItems} from '../actions/items';

export class App extends React.Component {
    render() {
        return (
            <div className="app">

                <Route exact path="/" component={Products} />

            </div>
        );
    }
}

const mapStateToProps = state => ({

});


export default withRouter(connect(mapStateToProps)(App));