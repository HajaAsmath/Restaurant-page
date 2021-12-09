let domUtils = (function() {
    let createDiv = (id, className) => {
        let div = document.createElement('div');
        addClassAndId(div, className, id);
        return div;
    }

    let createPara = (id, className) => {
        let p = document.createElement('p');
        addClassAndId(p, className, id);
        return p;
    }

    let createImg = (src, id, altText, className) => {
        let img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', altText);
        addClassAndId(img, className, id);
        return img;
    }

    let createLabel = (id, className) => {
        let label = document.createElement('label');
        addClassAndId(label, className, id);
        return label;
    }

    let addClassAndId = (element, className, id) => {
        if (id != null && id != undefined)
            element.setAttribute('id', id);
        if (className != null && className != undefined) 
            element.classList.add(className);
        return element;
    }

    return {createDiv, createPara, createImg, createLabel};
}());

export default domUtils;