/* eslint-disable max-lines-per-function */
const animals = {
  Bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Turtle: ['Vertebrate', 'Cold-blooded'],
  Whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  Salmon: ['Vertebrate', 'Cold-blooded'],
  Ostrich: ['Vertebrate', 'Warm-blooded', 'Bird'],
};

document.addEventListener('DOMContentLoaded', () => {
  let classificationList = document.querySelector('#animal-classifications');
  let animalList = document.querySelector('#animals');
  let clearButton = document.querySelector('#clear');

  function forEachElement(elements, callback) {
    [...elements].forEach(callback);
  }

  function setDefault(selection) {
    let options = [...selection.options];
    let option = options.find(option => !option.hasAttribute('hidden'));
    selection.selectedIndex = options.indexOf(option);
  }

  const hideOption = option => option.setAttribute('hidden', '');
  const unhideOption = option => option.removeAttribute('hidden');
  const unhideOptions = options => forEachElement(options, unhideOption);

  classificationList.addEventListener('change', event => {
    let chosen = event.target.value;

    forEachElement(animalList.options, animal => {
      if (animals[animal.value] && animals[animal.value].includes(chosen)) {
        unhideOption(animal);
      } else {
        hideOption(animal);
      }
    });

    setDefault(animalList);
  });

  animalList.addEventListener('change', event => {
    let chosen = event.target.value;
    let classifications = animals[chosen];

    forEachElement(classificationList.options, classification => {
      if (classifications.includes(classification.value)) {
        unhideOption(classification);
      } else {
        hideOption(classification);
      }
    });

    setDefault(classificationList);
  });

  clearButton.addEventListener('click', event => {
    event.preventDefault();
    animalList.selectedIndex = 0;
    classificationList.selectedIndex = 0;
    unhideOptions(animalList.options);
    unhideOptions(classificationList.options);
  });
});
