import React, { Component } from 'react';
import './footer.css';
import logo from './../../assets/logo.jpg';
import facebook from './../../assets/facebook.png';
import twitter from './../../assets/twitter.png';
import instagram from './../../assets/instagram.png';
import linkedin from './../../assets/linkedin.png';

export default class Footer extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div className='Footer-main'> 
                <div className='foot-logoSection'>   
                    <img src={logo} className = 'foot-logo' alt="logo"/>
                </div>
                <div className='foot-socialMedia'>
                    <a><img src={facebook} className = 'foot-social' alt="logo"/></a>
                    <a><img src={twitter} className = 'foot-social' alt="logo"/></a>
                    <a><img src={instagram} className = 'foot-social' alt="logo"/></a>
                    <a><img src={linkedin} className = 'foot-social' alt="logo"/></a>
                </div>
                <div className= 'foot-links'>

                </div>
            </div>
        )
    }
}