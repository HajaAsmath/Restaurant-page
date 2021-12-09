import domUtils from './domUtils.js';

export default function navTab() {
    let navTab = domUtils.createDiv('nav-tab');
    let home = domUtils.createDiv('home');
    home.textContent = 'Home';
    let menu = domUtils.createDiv('menu');
    menu.textContent = 'Menu';
    let contact = domUtils.createDiv('contact');
    contact.textContent = 'Contact';

    navTab.appendChild(home);
    navTab.appendChild(menu);
    navTab.appendChild(contact);

    return navTab;
}