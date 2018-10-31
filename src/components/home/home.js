import React, { Component } from 'react';
import './home.css';
import family from './../../assets/family.jpg';
import quoteBlue from './../../assets/quoteBlue.png';

export default class Home extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className='home-header'>
                    <h1>The Utah Cabinet Co</h1>
                    <h2>From Stock to High-End Cabinets</h2>
                    <h3>We work within your budget and design needs</h3>
                </div>
                <div className='home-about'>
                    <div className ='home-aboutLeft'>
                        <h1>About Us</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                    </div>
                    <img src={family} className = 'home-family' alt="Family"/>
                </div>
                <div className='home-projects'>
                    <h1>Projects</h1>
                    <div className='home-projectCard'></div>
                    <div className='home-projectCard'></div>
                    <div className='home-projectCard'></div>
                </div>
                <div className='home-pages'>
                    <div className='home-page1'>
                        <h2>Custom Cabinets</h2>
                        <p className='pages-text'>Limited only by your imagination, custom cabinets allow you to truly create a one of a kind dream kitchen that is hand crafted just for you. We help you marry beautiful design and great functionality to create the heart of your home.</p>
                    </div>
                    <div className='home-page2'>
                        <h2>Semi-Custom Cabinets</h2>
                        <p className='pages-text'>Paint and stain selection, thousands of sizes and configurations, and extended warranties are available on our semi-custom lines, making it an affordable option without the sacrifices.</p>
                    </div>
                    <div className='home-page3'>
                        <h2>Countertops</h2>
                        <p className='pages-text'>Affordability, standard features, and speed are some of the reasons why stock cabinetry fits the bill. Choose between DIY ready-to-assemble or fully installed cabinets. Utilize our custom shop to incorporate some custom elements and create a blended package.</p>
                    </div>
                </div>
                <div className='home-testimonials'>
                    <div>
                        <img src={quoteBlue} className = 'home-quote' alt="quote"/>
                        <p className='home-testimony'>The Utah Cabinet Company offered every option I was looking for in cabinetry at a very competitive price. After comparing with several companies, we decided to build custom cabinets with them. We are very pleased with how everything turned out, and impressed by the quality of our cabinets. The whole process was very smooth, on time, and the price never changed. Highly highly recommend.<br/><br/>Cheryl S. - Client</p>
                    </div>
                </div>


            </div>
        )
    }
}