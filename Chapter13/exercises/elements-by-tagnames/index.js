function byTagName(node, tagName) {
    const root = node.nodeName.toLowerCase();
    // if(node.nodeType == Node.ELEMENT_NODE) {
    //     console.log(node);
    // }
    return node.querySelectorAll(tagName)
    // Your code here.
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2