/*
Question 1.
Question
Given an object containing chapter names and keys and page numbers as values, and a target page create a function that returns which chapter is nearest to the page you're on.

EXAMPLES / TEST CASES
console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"

Understand the Problem
- input:
  - an object containing chapter names (as keys) and page numbers (as values)
  - a target page
- output:
  - the name of chapter which is nearest to the page you're on
- requirements:
  - nearest -> means whatever page number we are closest to, regardless of whether it is infront or behind the target page number
  - all page numbers will be valid integers
  - the first argument will always be an object
  - return the higher page number if they are equidistant from the target page
- questions:
  - will the first argument always be an object? -> yes
  - will that object always have integers as property values? -> yes
    - Do we need to deal with invalid numbers here? -> no
  - will the object ever be empty? i.e. no chapters
  - will the second argument always be a positive integer?
    - do we need to deal with invalid inputs like -> negative numbers, NaN, +\-Infinity, other data types?
  - will either argument ever be missing?
- edge cases:
  - empty object
  - two chapters equidistant from the number
Data Structure
- input: an object & integer
  - useful change object to an array of two-element arrays for iteration
Algorithm
- convert the object to an array of two-element arrays [['Chapter 1', 1], ['Chapter 2', 15], ['Chapter 3', 37]]
- reduce the array to the chapter title with the smallest delta
  - calculate the delta between the targetpage number and the current chapter's page number
    - if it is less than or equal to the delate of the current smallest page number
      - return a two element array of the chapter name and page number
    - else return the existing two element array
- return the first element of the returned two element array
*/
function nearestChapter(chapters, targetPage) {
  let chaptersArr = Object.entries(chapters);
  if (chaptersArr.length === 0) return null;
  
  return chaptersArr.reduce((smallest, current) => {
    let currentDelta = Math.abs(current[1] - targetPage);
    let smallestDelta = Math.abs(smallest[1] - targetPage);
    return currentDelta <= smallestDelta ? current : smallest;
  })[0];
}
console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)); // ➞ "Chapter 2"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)); // ➞ "The End?"

// equidistant chapters
console.log(nearestChapter({
  "Chp. 1": 5,
  "Chp. 2": 11,
}, 8)); // -> "Chp. 2"

console.log(nearestChapter({}, 10));