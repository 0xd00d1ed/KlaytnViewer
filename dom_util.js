const clearChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

window.f = Element.prototype.appendChild;
Element.prototype.justAddChild = () => {
    window.f.apply(this, arguments);
    return this;
};
