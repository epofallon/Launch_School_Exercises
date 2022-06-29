/*
You will be given a list of objects. Each object has type, material, and 
possibly secondMaterial. The existing materials are: paper, glass, organic, 
and plastic.

Your job is to sort these objects across the 4 recycling bins according to 
their material (and secondMaterial if it's present), by listing the type's 
of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in 
both of the respective bins
The order of the type's in each bin should be the same as the order of 
their respective objects was in the input list

Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"], -> paper
  ["wine bottle", "beer bottle"],               -> glass
  ["rotten apples", "out of date yogurt"],      -> organic
  ["out of date yogurt"]                        -> plastic
]
=== Understand The Problem ===
- given a list of objects
  object properties include: type, material, maybe secondMaterial
- different material -> paper, glass, organic, & plastic
- sort the objects across 4 recycling bins according to material.
  - sorting means -> placing an objectj's `type` in the correct bin based on material type
  - when an object has more than one material, it is placed in both both bins
- inputs: a list of objects
  - each object has a `type`, a `material` & an optional `secondMaterial`
- output: an array of arrays
  - each sub array will be a different recycling bin (in the oredr of paper, glass, organic & plastic)
  - each bin will contain the types of each object that goes in that bin
- requirements:
  - all bins should be listed even if they're empty
  - the bins have a particular order
  - objects with two matierals are listed in both bins
  - objects in bins should be the same order as they came in the input list
  - do not need to worry about invalid material types
  - objects will always a material
- Data Stucuture:
  - input: an array of objects
    - keep this as an array of objects so we can interate through it in order
  - output: an array of arrays, where each sub array is a recycling bin
    - requirement: bind order -> ['paper', 'glass', 'organic', 'plastic']
- Algorithm:
  - declare binOrder equal to ['paper', 'glass', 'organic', 'plastic']
  - declare bins = [[],[], [], []]; our four bin types start out empty
  - iterate through the list of input objects
    - get the bind index of the current object's material
    - addToBin (add the current object type to the appropiate bin)
    - if that object has a secondary material
      - get the bind index of the current object's material
      - addToBin (add the current object type to the appropiate bin)
  - return bins

  - addToBin(bins, currentObject, bin location)
    - if the bin for that material exists
      - add the current object's type to that bin

*/
let p = arg => console.log(arg);

function sortRecycling(objects) {
  let binOrder = ['paper', 'glass', 'organic', 'plastic'];
  let bins = [[], [], [], []];

  objects.forEach(obj => {
    let binIdx = binOrder.indexOf(obj.material);
    addToBin(bins, obj, binIdx);
    if (obj.secondMaterial) {
      binIdx = binOrder.indexOf(obj.secondMaterial);
      addToBin(bins, obj, binIdx);
    }
  });

  return bins;
}

function addToBin(bins, obj, binIdx) {
  bins[binIdx].push(obj.type);
}

// happy path sorting
let objects1 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];

console.log(sortRecycling(objects1));

// output = [
//   ["wine bottle", "amazon box", "beer bottle"], -> paper
//   ["wine bottle", "beer bottle"],               -> glass
//   ["rotten apples", "out of date yogurt"],      -> organic
//   ["out of date yogurt"]                        -> plastic
// ]

let objects2 = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];

console.log(sortRecycling(objects2));

// output = [
//   ["wine bottle", "amazon box", "beer bottle"], -> paper
//   ["wine bottle", "beer bottle"],               -> glass
//   ["rotten apples", "out of date yogurt"],      -> organic
//   []                                            -> plastic
// ]

let objects3 = [
  {"type": "amazon box", "material": "paper"},
  {"type": "rotten apples", "material": "organic"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "out of date yogurt", "material": "organic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},  
];

console.log(sortRecycling(objects3));

// output = [
//   ["amazon box", "beer bottle", "wine bottle"], -> paper
//   ["beer bottle", "wine bottle"],               -> glass
//   ["rotten apples", "out of date yogurt"],      -> organic
//   []                                            -> plastic
// ]


// P - 12
// E - 5.5 (17.5)
// D - 2.5 (20)
// A - 12.5 (32.5)
//   pre-walkthrough - 8 (28)
// C - 9 (41.5)



// - Be really organized with your pedac - it helps later if you need to mentally jump around when your original notes are in order. It also helps the interviewer follow your thought process

// - Go in order P-E-D-A - obviously you can jump back, but I've seen some others jump ahead too much and then their notes are messy and they miss stuff. Do one step, make sure it is thorough, then move on. Again, you can always revisit but don't skip around randomly. For me, P is inputs/outputs, rules, questions & edge cases, then I move onto examples/test cases. I do often go through an example during the P phase before I've listed all the rules to help understand the problem but I try not to do this first thing after reading the problem, because examples can sometimes throw you off implicit requirements.

// - Write out rules and edge cases separately - rules are needed for understanding the problem and making sure you've made implicit assumptions/rules explicit, edge cases are listed to ensure you've covered them all

// - Use the edge case list + happy paths as a template - Copy your edge cases down as a template for your test cases. Label each test case with the edge case it represents and group similar cases under the same label. That way, you make sure you've got at least one test case for each edge case and haven't missed any that you came up with. And when you're testing and one fails, you can immediately see which one because it is labeled (Saves time of parsing what the test case is testing, since many times the differences are subtle). DONT FORGET to include your happy path test cases too if you copy this down - sometimes I even write a happy path section in my P of pedac above edge cases to make sure I get them too.

// - Ask lots of questions - Especially ask if your understanding of the problem is correct once you've articulated it and have shown examples. Ask if your test cases make sense and if the output you expect is correct.

// - For questions about the inputs, I like to think from the outermost data type inward to make sure I get all the possible edge cases
//   -- For example, if the input is an array of objects, I start with just the fact that there is input first:
//     - What if no input is given, what if it's not an array, etc.
//   -- Then I move to the array
//     - What if the array is empty, has empty items, etc
//   -- Then I move to the array elements
// will they always be objects, etc
//   -- Then to the objects themselves
// keys, values, duplicate values, same object twice etc.
//   -- Don't forget to look for problem specific edge cases - this is the hardest thing to do. But you can't just rattle off the list from your notes, you've got to think about this specific problem


// - Make the test cases return true/false if possible
//   -- If the problem allows, compare the return value of your test case with a boolean and output that result vs outputting the return value
//       - i.e. console.log(mySolution(input) === 'the expected result');
//       - negative case: console.log(mySolution(badInput) === 'this is bad');
//   -- This way, you're able to see true and false for your test cases when they run, vs having to manually compare the results to the expectation. More accurate and faster


// - Walk through the algorithm with a test case if time allows. If you've got enough time, do a good case and a bad case/edge case you want to make sure is covered. This has solved many problems for me before coding and I've seen people miss entire edge cases that they knew about, but catch it during algorithm by doing this.

// - My other algorithm preference is to physically write out what the data structure I'm using at each step is. That way I can see it vs having to hold it in my brain. Especially helpful for dealing with those tricky bugs where you forget a simple language syntax thing or method return value and when dealing with nested data structures like arrays of arrays







