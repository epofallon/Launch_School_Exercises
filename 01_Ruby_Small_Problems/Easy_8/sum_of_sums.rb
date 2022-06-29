# UNDERSTAND THE PROBLEM
=begin
  - input: an array of numbers
  - output: an integer
    - integer is the sum of the sums of each leading subsequence for that Array
    
  - sum together arrays of numbers
=end

# EXAMPLES AND TEST CASES
=begin
  sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
  sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
  sum_of_sums([4]) == 4
  sum_of_sums([1, 2, 3, 4, 5]) == 35
=end

# DATA STRUCTURES
=begin
  - begin with an array of integers
  - create an array of arrays where each sub-array is a subsequence for that array
  - an integer to return
=end

# ALGORITHM
=begin
  - initiate empty 'sum_array'
  - iterate through the given array
    - draw out a sub array starting at index 0 with length 1, then 2, then 3, until length is equal to sub array
    - sum the sub array
    - add the sum number to the 'sum_array'
  - return the sum of the 'sum_array'
=end

# CODE WITH INTENT
def sum_of_sums(num_arr)
  sum_arr = 0
  num_arr.each_index do |idx|
    sum_arr += num_arr[0, idx + 1].inject(:+)
  end
  sum_arr
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35