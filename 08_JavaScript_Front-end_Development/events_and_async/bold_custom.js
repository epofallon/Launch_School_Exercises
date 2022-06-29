function makeBold(element, callback) {
  element.style.fontWeight = "bold";
  if (typeof callback === 'function') callback(element);
}