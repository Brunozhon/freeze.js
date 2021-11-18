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
