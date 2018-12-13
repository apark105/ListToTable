import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogOut } from '../actions';
// import '../assets/css/r_menu.css';
// import logo from '../assets/images/r_logo.png';
// import checkIn from '../assets/images/checkin.png'
// import waiting from '../assets/images/clock.png'
// import contactUs from '../assets/images/Contact-Me.jpg'
// import seated from '../assets/images/table.png'
// import account from '../assets/images/account.png'
// import home from '../assets/images/home.png'



class RNavMenu extends Component{
    renderLinks = () => {
        const {auth, logOut} = this.props;
        console.log("ITEMMMM",localStorage.getItem('restId'))

        if(auth){
            const restId= localStorage.getItem('restId')
           
            return(
                <Fragment>
                    <li>
                        <Link to={`/waiting/${restId}`}>Waiting</Link>
                    </li>
                    <li>
                        <Link to={`/notified/${restId}`}>Notified</Link>
                    </li>
                    <li>
                        <Link to={`/seated/${restId}`}>Seated</Link>
                    </li>

                    <li>
                        <Link to={`/check-in/${restId}`}>Check-In</Link>
                    </li>
                    <li>
                        <button onClick={logOut} className="green btn">Log Out</button>
                    </li>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
            </Fragment>
        )
    }
    render(){
        // console.log('user auth:', this.props)
        return (
            <Fragment>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {this.renderLinks()}  
            </Fragment>
    )}
}

function mapStateToProps(state){
    return{
        auth: state.partner.auth
    }
}

export default connect(mapStateToProps, {
    logOut: userLogOut,
}) (RNavMenu);