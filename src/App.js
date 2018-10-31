import React, { Component } from 'react';
import Routes from './routes';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import './reset.css';
import './App.css';

class App extends Component {
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



  render() {
    return (
      <div className="App">
      <nav className='nav-body'><Nav /></nav>
        {Routes}
        <Footer />
      </div>
    );
  }
}

export default App;
