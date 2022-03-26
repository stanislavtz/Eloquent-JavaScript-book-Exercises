function byTagName(node, tagName) {
    const result = [];

    function countTags(node) {
        const root = node.nodeType == Node.ELEMENT_NODE;
        if (!root) {
            return [];
        }

        Array.from(node.children).forEach(element => {
            if(element.nodeName == tagName.toUpperCase()) {
                result.push(element);
            }

            return countTags(element);
        });

        return result;
    }

    return countTags(node);
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
  // → 2