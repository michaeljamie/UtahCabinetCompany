import React, { Component } from 'react';
import './nav.css';


export default class Nav extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    componentdidmount = () => {
        let scrollpos = window.scrollY
        const header = document.querySelector("nav")
        const header_height = header.offsetHeight

        const add_class_on_scroll = () => header.classList.add("fade-in")
        const remove_class_on_scroll = () => header.classList.remove("fade-in")

       document.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= header_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
        })
    }


    render(){
        return(
            <nav className='nav-body'>
                <button className='nav-link'><span>CUSTOM CABINETS</span></button>
                <button className='nav-link'><span>SEMI-CUSTOM CABINETS</span></button>
                <button className='nav-link'><span>COUNTERTOPS</span></button>
                <button className='nav-link'><span>SCHEDULE APPT</span></button>
            </nav>
        )
    }
}