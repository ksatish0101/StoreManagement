import React, { Component } from 'react';
import ListStoreComponent from './ListStoreComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StoreComponent from './StoreComponent';

class StoreApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Stores Management Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListStoreComponent} />
                        <Route path="/store" exact component={ListStoreComponent} />
                        <Route path="/store/:id" component={StoreComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default StoreApp