import domUtils from './domUtils.js';

let navTab = function() {
    let content = domUtils.createDiv('content');

    let navTab = domUtils.createDiv('nav-tab');
    let home = domUtils.createDiv('home');
    let menu = domUtils.createDiv('nmenu');
    let contact = domUtils.createDiv('contact');

    navTab.appendChild(home);
    navTab.appendChild(menu);
    navTab.appendChild(contact);

    content.appendChild(navTab);

    return content;
}

export default navTab;