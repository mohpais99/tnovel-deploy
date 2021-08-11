import React, { Component } from 'react';
import routes from 'admpanel/Routes';
import Sidebar from 'admpanel/components/Sidebar'
import Header from 'admpanel/components/Header'
import { Route, Switch } from 'react-router-dom';
import 'assets/styles/admpanel.css'
import MenuMobile from 'admpanel/components/MenuMobile';

export class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        let device;
        if (window.innerWidth > 993 ) {
            device = 'desktop'
        } else if (window.innerWidth >= 599 && window.innerWidth < 990) {
            device = 'tablet'
        } else if (window.innerWidth < 589) {
            device = 'mobile'
        }
        return this.setState({ device });
    }

    getRoutes(routes) {
        return routes.map((prop, key) => {
            if (prop.layout === "/adm-panel") {
                return (
                    <Route 
                        key={key}
                        path={prop.layout + '/' + prop.path}
                        render={props => 
                            <prop.component {...props} />
                        }
                        exact />
                );
            }
        });
    }
    render() {
        return (
            <div className="wrapper-adm">
                <Sidebar device={this.state.device} />
                <MenuMobile />
                <div className="main-panel">
                    <Header />
                    <div className="content">
                        <div className="container-fluid">
                            <Switch>{this.getRoutes(routes)}</Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel;
