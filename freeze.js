function Freeze(elem) {
  if (typeof elem === 'string') {
    this.elem = document.querySelector(elem)
  } else if (typeof elem === 'object') {
    this.elem = elem
  } else {
    throw new TypeError("Parementer 'elem' must be a string or a object.")
  }
}
Freeze.prototype.html = function(value) {
  if (typeof value === 'undefined') {
    return this.elem.innerHTML
  } else {
    this.elem.innerHTML = value
  }
}
Freeze.createElement = function(elemName) {
  var elem = document.createElement(name)
  return Freeze(elem)
}
Freeze.createCustomElement = function(elemClass, elemExtends, elemName, elemIs) {
  var customElem = customElements.define(elemName, elemClass, {extends: elemExtends})
  return (Freeze(
    document.createElement(elemName, {is: elemIs})
  ))
}
