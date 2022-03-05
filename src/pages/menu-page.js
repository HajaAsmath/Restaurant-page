import domUtils from '../utils/domUtils.js';
import images from '../foodImages/imageImport';
import border from '../pngs/border.png';

const quotes = [['burger', 'The best burger in the worls from the best restaurant in the world. Have a fat filled piece of american breakfast in the world of rich and wealthy'],
  ['coffee', 'A refreshing coffee made by a wonderful coffee maker in the world from the world`s top barissta'],
  ['edd and salad', 'Your morning sets up the success of your day… I use my first hour awake for my morning routine of breakfast and meditation to prepare myself.'],
  ['fries', 'A quick snake while you watch your favorite football team win or loss. Enjoy the fires if your team win or fill up your stomach if it loss.'],
  ['pancake', 'It probably goes without saying that I enjoy the potato pancakes, delicious hams and so forth that maddeningly turn up at this time of year.'],
  ['pizza', 'Anyone who says that money cannot buy happiness has clearly never spent their money on pizza.'],
  ['steak', 'The only time to eat diet food is while you`re waiting for the steak to cook.']];

export default function menuPage() {
  const menu = domUtils.createDiv('menu-content', 'content');

  const head = domUtils.createDiv();
  const menuLabel = domUtils.createLabel('menu-label');
  menuLabel.textContent = 'Menu';
  head.appendChild(menuLabel);

  const borderImg = domUtils.createImg(border, 'border');
  const borderImg1 = domUtils.createImg(border, 'border');

  menu.appendChild(head);
  menu.appendChild(borderImg);

  for (let i = 0; i < quotes.length; i += 1) {
    const item = domUtils.createDiv(null, 'items');
    const img = domUtils.createImg(images[i], null, quotes[i][0], 'food-img');
    const desc = domUtils.createPara(null, 'food-desc');
    const price = domUtils.createLabel(null, 'price');
    price.textContent = `$${Math.floor((Math.random() * 100) + 1)}`;
    [, desc.textContent] = quotes[i];

    item.appendChild(img);
    item.appendChild(desc);
    item.appendChild(price);

    menu.appendChild(item);
  }

  menu.appendChild(borderImg1);

  return menu;
}
