import React, { Component } from 'react';
import routes from 'app/Routes';
import { Route, Switch } from 'react-router-dom';
import Header from 'app/components/Header';
import 'assets/styles/app.css';
import Footer from 'app/components/Footer';

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    updateMeta(meta) {
        this.setState({meta})
    }
    getRoutes(routes) {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={this.props.match.path + prop.path}
                    render={props => 
                        <prop.component {...this.state} {...props} />
                    } />
            );
        });
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div id="main">
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;
