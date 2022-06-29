# UNDERSTAND THE PROBLEM
=begin
  - write a method 'interleave'
    - method takes two arrays passed in as arguments
    - returns a single array
      - return array contains elements from both array arguments
      - elements are take in alternation
      
    - ASSUME: neither input array is empty
    - ASSUME: argument arrays will have the same number of elements
    
    - INPUT: two non-empty argument arrays of the same length
    - OUTPUT: one array with the elements from the argument arrays taken in alteration
    
    - Explicit Rules:
      - Elements taken in alteration
      - Duplicates are ignored all elements of both arrays are passed in
    - Implicit Rules:
      - The first array passed in starts the alternating
      
    - strucutre:
    [1, 2, 3], ['a', 'b', 'c'] => [1, 'a', 2, 'b', 3, 'c']
    
    arr_1 will have positions 0, 2, 4
    arr_2 will have positions 1, 3, 5
    
    0 -> 0 , 1
    1 -> 2 , 3
    2 -> 4 , 5
    3 -> 6 , 7
    
    result is 2*i then (2*i)+1
=end

# EXAMPLES / TEST CASES
  # interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']
  
# DATA STRUCTURE
  # Arrays all the way
  
# ALGORITHM
=begin
  - create an empty result array
  - loop the length of an argument array
    - push the nth element of the first argument array into the result array
    - push the nth element of the second argument array into the result array
    - iterate by 2
  - return the result array
=end

def interleave(arr_1, arr_2)
  combined_arr =  arr_1.zip(arr_2).flatten
  
  combined_arr
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']