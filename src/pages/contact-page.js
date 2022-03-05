import logo from '../pngs/logo.png';
import domUtils from '../utils/domUtils.js';

const contactPara = 'To keep our employees, guests, and community safe, Eleven Madison Park requires that all guests above the age of 12 provide proof that they`ve received one vaccine dose with matching government issued ID.\</br\> We look forward to welcoming you to Eleven Madison Park.';

export default function contactPage() {
  const contact = domUtils.createDiv('contact-content', 'content');
  const heading = document.createElement('h4');
  heading.innerHTML = '11 Madison Avenue \</br\> New York, NY 10010';
  heading.setAttribute('id', 'address');

  const pre = document.createElement('pre');
  pre.textContent = '212.889.0905';

  const para = domUtils.createPara('info');
  para.innerHTML = contactPara;

  const contactPageLogo = domUtils.createImg(logo, 'logoImage-contact');
  const reservation = domUtils.createPara();
  reservation.textContent = 'Reservations can be made via Tock.';

  contact.appendChild(heading);
  contact.appendChild(pre);
  contact.appendChild(para);
  contact.appendChild(contactPageLogo);
  contact.appendChild(reservation);

  return contact;
}
