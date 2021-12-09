import logo from './logo.png';
import domUtils from './domUtils.js';

const contactPara = 'To keep our employees, guests, and community safe, Eleven Madison Park requires that all guests above the age of 12 provide proof that they`ve received one vaccine dose with matching government issued ID.</br> We look forward to welcoming you to Eleven Madison Park.';

let contactPage = function() {
    let contact = domUtils.createDiv('contact-content', 'content');
    let heading = document.createElement('h4');
    heading.textContent('11 Madison Avenue </br> New York, NY 10010');
    heading.setAttribute('id','address');

    let pre = document.createElement('pre');
    pre.textContent('212.889.0905');

    let para = domUtils.createPara('info');
    para.textContent(contactPara);

    let contactPageLogo = domUtils.createImg(logo, 'info');
    let reservation = domUtils.createPara();

    contact.appendChild(heading);
    contact.appendChild(pre);
    contact.appendChild(para);
    contact.appendChild(contactPageLogo);
    contact.appendChild(reservation);

    return contact;
}

export default contactPage;