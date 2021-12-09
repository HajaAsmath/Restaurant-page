import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';
import navTab from './nav-tab.js'
import domUtils from './domUtils.js';

(function() {
    function addEvents() {
        document.querySelector('#home').addEventListener('onclick', displayHomePage);
        document.querySelector('#menu').addEventListener('onclick', displayMenuPage);
        document.querySelector('#contact').addEventListener('onclick', displayContactPage);
    }

    function displayHomePage() {
        
    }
}());