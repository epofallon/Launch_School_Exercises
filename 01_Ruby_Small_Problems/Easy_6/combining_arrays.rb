# UNDERSTAND THE PROBLEM
=begin
  Write a method that takes two Arrays as arguments, and returns an Array that contains
  all of the values from the argument Arrays. There should be no duplication of values
  in the returned Array, even if there are duplicates in the original Arrays.
  
  - Explicit Requirements:
    - Takes two arrays and merges them into one array
      - Result array has all values from both argument arrays
      - No duplicates of values in the result array
      
  - Implicit Requirements:
    - Elements of arrays can be any ruby objects
    
  - Input: Two Arrays
  - Output: A single array that is a merge of the original two arrays
  
  - simple example:
  [1, 2, 3, 4]; [5, 6, 4, 8] --> [1, 2, 3, 4, 5, 6, 8]
=end

# TEST CASES / EXAMPLES
  # merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# DATA STRUCTURE
  # Start with Two arrays containing elements that can be any objects
  # End with One array containing elements of the initial arrays
  
  # Arrays to handle data
  
# ALGORITHM
=begin
  1. Create an empty 'merged_arr' array to contain our results
  2. Add the first argument array into 'merged_arr'
  3. Push the second argument array into 'merged_arr'
  4. Flatten 'merged_arr'
  5. Remove any duplicate values in 'merged_arr'
  6. return 'merged_arr'
=end

def merge(arr1, arr2)
  merged_arr  = []
  merged_arr << arr1
  merged_arr << arr2
  merged_arr.flatten!.uniq!
end


p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]