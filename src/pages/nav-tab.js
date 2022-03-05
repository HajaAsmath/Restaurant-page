import domUtils from '../utils/domUtils.js';

export default function navTab() {
  const navTab = domUtils.createDiv('nav-tab');
  const home = domUtils.createDiv('home');
  home.textContent = 'Home';
  const menu = domUtils.createDiv('menu');
  menu.textContent = 'Menu';
  const contact = domUtils.createDiv('contact');
  contact.textContent = 'Contact';

  navTab.appendChild(home);
  navTab.appendChild(menu);
  navTab.appendChild(contact);

  return navTab;
}
