import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import Test from './test';
import LandingPage from './landingPage';
import '../assets/css/landingPage.css';
import tfLogo from '../assets/images/logo.png';
import {Route} from 'react-router-dom';
import CustomerMapPg from './customerMapPg';

import Login from './login';


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={LandingPage} />
                <Route path="/customer-map" component={CustomerMapPg} />

            
                <Route path="/login" component={Login}/>
                
                

                {/* <div className="app">
                    <Test/>
                </div> */}
            </React.Fragment>
        )
    }
} 
export default App;
