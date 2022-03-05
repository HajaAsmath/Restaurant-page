import domUtils from '../utils/domUtils.js';
import logo from '../pngs/logo.png';
import border from '../pngs/border.png';

const intro1 = 'Eleven Madison Park is a fine dining restaurant located in the heart of New York City. The restaurant overlooks Madison Square Park, one of the most beautiful parks in Manhattan, and sits at the base of a historic Art Deco building on the corner of East 24th Street and Madison Avenue. Located here since 1998, it underwent a full-scale renovation and redesign in the summer of 2017. The restaurant has been owned by Chef Daniel Humm since 2011 and during that time it has evolved considerably, both in food and in experience. Our tasting menu in the main dining room consists of entirely plant-based dishes. Guests can also visit the bar for a more abbreviated version of the tasting menu, some light snacks, or simply for a cocktail or glass of wine. Every dinner purchased at Eleven Madison Park allows us to provide meals to New Yorkers experiencing food insecurity. These meals are served from the Eleven Madison Truck, which is operated by restaurant staff, in partnership with Rethink Food.';
const intro2 = 'In April 2021 we deployed the Eleven Madison Truck in partnership with Rethink Food to transport and serve nutritious meals in various New York neighborhoods including food-insecure districts in the Bronx and Brooklyn. Working closely with the organization`s established network of partners, the Eleven Madison Truck offers a mobile extension of our commissary kitchen, distributing meals made with the same produce and ingredients utilized at the restaurant on-site in an effort to reduce food insecurity in the communities that need it most. Every dinner purchased at Eleven Madison Park allows us to provide meals to these New Yorkers experiencing food insecurity. Our team, alongside our partners at Rethink Food, continues to build on our work of reconfiguring the restaurant model to combat food insecurity and ultimately, create a more sustainable and equitable food system while utilizing our platform to spread awareness of the issue.';

export default function homePage() {
  const home = domUtils.createDiv('home-content', 'content');
  const logoDiv = domUtils.createDiv('logo');
  const logoImg = domUtils.createImg(logo, 'logoImage');
  logoDiv.appendChild(logoImg);

  const introDiv = domUtils.createDiv('intro-container');
  const borderImg = domUtils.createImg(border, 'border');
  const borderImg1 = domUtils.createImg(border, 'border');
  const introPara = domUtils.createPara(null, 'intro');
  const introPara2 = domUtils.createPara(null, 'intro');
  introPara.textContent = intro1;
  introPara2.textContent = intro2;

  introDiv.appendChild(borderImg);
  introDiv.appendChild(introPara);
  introDiv.appendChild(introPara2);
  introDiv.appendChild(borderImg1);

  home.appendChild(logoImg);
  home.appendChild(introDiv);

  return home;
}
