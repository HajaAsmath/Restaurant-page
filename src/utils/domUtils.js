const domUtils = (function () {
  const addClassAndId = (element, className, id) => {
    if (id != null && id !== undefined) element.setAttribute('id', id);
    if (className != null && className !== undefined) element.classList.add(className);
    return element;
  };

  const createDiv = (id, className) => {
    const div = document.createElement('div');
    addClassAndId(div, className, id);
    return div;
  };

  const createPara = (id, className) => {
    const p = document.createElement('p');
    addClassAndId(p, className, id);
    return p;
  };

  const createImg = (src, id, altText, className) => {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', altText);
    addClassAndId(img, className, id);
    return img;
  };

  const createLabel = (id, className) => {
    const label = document.createElement('label');
    addClassAndId(label, className, id);
    return label;
  };

  return {
    createDiv, createPara, createImg, createLabel,
  };
}());

export default domUtils;
