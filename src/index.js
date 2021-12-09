import homePage from './home-page.js';
import menuPage from './menu-page.js';
import contactPage from './contact-page.js';
import navTab from './nav-tab.js'
import domUtils from './domUtils.js';

(function() {
    let mainContent = document.querySelector('#mainContent');

    function init() {
        mainContent.appendChild(homePage.homePage());
        document.body.appendChild(navTab);
        document.body.appendChild(mainContent);
    }

    function addEvents() {
        document.querySelector('#home').addEventListener('onclick', displayHomePage);
        document.querySelector('#menu').addEventListener('onclick', displayMenuPage);
        document.querySelector('#contact').addEventListener('onclick', displayContactPage);
    }

    function displayHomePage() {
        mainContent.textContent = '';
        mainContent.appendChild(homePage.homePage());
    }

    function displayMenuPage() {
        mainContent.textContent = '';
        mainContent.appendChild(menuPage.menuPage());
    }

    function displayContactPage() {
        mainContent.textContent = '';
        mainContent.appendChild(contactPage.contactPage());
    }

    init();
    addEvents();
}());