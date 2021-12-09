import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';
import navTab from './nav-tab.js'
import './style/style.css'
import domUtils from './utils/domUtils.js';

(function() {
    let mainContent;

    function init() {
        let content = domUtils.createDiv('content');

        content.appendChild(navTab());
        mainContent = document.createElement('div');
        mainContent.setAttribute('id','mainContent');
        mainContent.appendChild(homePage());
        content.appendChild(mainContent);

        document.body.appendChild(content);
        
    }

    function addEvents() {
        document.querySelector('#home').addEventListener('click', displayHomePage);
        document.querySelector('#menu').addEventListener('click', displayMenuPage);
        document.querySelector('#contact').addEventListener('click', displayContactPage);
    }

    function displayHomePage() {
        mainContent.textContent = '';
        mainContent.appendChild(homePage());
    }

    function displayMenuPage() {
        mainContent.textContent = '';
        mainContent.appendChild(menuPage());
    }

    function displayContactPage() {
        mainContent.textContent = '';
        mainContent.appendChild(contactPage());
    }

    init();
    addEvents();
}());