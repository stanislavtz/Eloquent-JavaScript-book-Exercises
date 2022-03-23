function createElement(node, textContent, children) {
    const element = document.createElement(node);
    element.textContent = textContent || '';

    if (!children || children.length < 1) {
        return element;
    }

    for (const child of children) {
        const el = createElement(child.node, child.textContent, child.children);
        element.appendChild(el);
    }

    return element;
}

export default createElement;