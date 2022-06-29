document.addEventListener('DOMContentLoaded', () => {
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (parentElement && parentElement instanceof Element) {
      return !parentElement.addEventListener(eventType, event => {
        const validTargets = [...parentElement.querySelectorAll(selector)];
        if (validTargets.includes(event.target)) callback(event);
      });
    }
  }

  // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  // Possible callback for use with the scenarios
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

  delegateEvent(element1, 'p', 'click', callback);
  // undefined
  // doesn't add an event listener to any elements
});

// eslint-disable-next-line max-len
/* We are adding an event listener to an element that will only invoke the passed in callback function when we perform said event on a child element of the specific element type passed in
*/