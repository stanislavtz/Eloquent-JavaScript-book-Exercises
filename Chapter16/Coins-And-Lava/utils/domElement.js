function domEleCreator(name, attrs, ...children) {
    const element = document.createElement(name);
    Object.entries(attrs).forEach(([attr, value]) => {
        element.setAttribute(attr, value);
    });
    children.forEach(child => element.appendChild(child));

    return element;
}

export default domEleCreator;