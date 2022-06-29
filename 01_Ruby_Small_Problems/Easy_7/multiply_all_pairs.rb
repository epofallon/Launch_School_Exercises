# UNDERSTAND THE PROBLEM
=begin
  - Input: two arrays of integers
    - the two arrays do not have to be the same length
    - neither will be empty
  - Output: a new array 
    - contains the product of every pair of numbers that can be formed between
            the elements of the two arrays
    - sorted in increasing value
=end

# TEST CASES / EXAMPLES
  # multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]
=begin
  [2, 4] * [4, 3, 1, 2]
  
  2 * 4
  2 * 3
  2 * 1
  2 * 2
  4 * 4
  4 * 3
  4 * 1
  4 * 2
=end

# DATA STRUCTURE
  # arrays all the way
  
# ALGORITHM
=begin
  - initialize a result array
  - iterate over the first argument array
    - iterate over the second argument array
      - multiply first argument array num by second argument array num
      - add to result array
    - exit inner loop
  - exit outer loop
  - sort result array
  - return result array
=end

def multiply_all_pairs(arr_1, arr_2)
  result_arr = []
  arr_1.each do |num_1|
    arr_2.each do |num_2|
      result_arr << num_1 * num_2
    end
  end
  result_arr.sort
end

p multiply_all_pairs([2, 4, 5, 6, 7], [4, 3, 1, 2, 6]) #== [2, 4, 4, 6, 8, 8, 12, 16]