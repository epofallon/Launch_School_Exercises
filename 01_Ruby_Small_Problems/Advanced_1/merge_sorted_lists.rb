# Understand the Problem
=begin
  Write a method that takes two sorted Arrays as arguments, and returns a new
  Array that contains all the elements from both arguments in sorted order. 
  
  You may not provide any solution that requires you to sort the result array.
  You must build the result array one element at a time in the proper oreder.
  
  The solution should not mutate the input arrays.
  
  - input: two sorted Arrays
  - output: a single Array
    - this Array contians the elements of both argument arrays
    - elements must be inputted in a sorted order 
    - cannot sort merged array after the fact
  - explicit rules:
    - cannot sort merged array after building it
    - elements must be inputted in sorted order
    - you cannot mutate the input arrays
  - implicit rules:
    - both arguments are arrays
    - an argument can be an empty array
    - an array can contain the same number more than once
=end

# Examples / Test Cases
=begin
  merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
  merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
  merge([], [1, 4, 5]) == [1, 4, 5]
  merge([1, 4, 5], []) == [1, 4, 5]
=end

# Data Structure
  # An array to pass elements into
  
# Algorithm
=begin
  - initialize result as []
  - initialize i_1 & i_2 as 0
  - iterate  the total number of elements time
    - compare arr_1[i_1] to arr_2[i_2]
    - if arr_1[i_1] <= arr_2[i_2]
      - push arr_1[i_1] to result
      - increase i_1 by 1
    - if arr_1[i_1] > arr_2[i_2]
      - push arr_2[i_2] to result
      - increase i_2 by 1
  - return result
=end

=begin
 i_1, i_2 = 0, 0
  (arr_1.size + arr_2.size).times do
    binding.pry
    case 
    when arr_1.empty? then result = arr_2
    when arr_2.empty? then result = arr_1
    when arr_2[i_2] == nil, (arr_1[i_1] < arr_2[i_2])
      result << arr_1[i_1]
      i_1 += 1
    when arr_1[i_1] == nil, (arr_2[i_2] < arr_1[i_1])
      result << arr_2[i_2]
      i_2 += 1
    when arr_1[i_1] == arr_2[i_2]
      result << arr_1[i_1] << arr_2[i_2]
      i_1 += 1
      i_2 += 1
    end
  end
=end
require 'pry'
def merge(arr_1, arr_2)
  result = []
  i2 = 0
  
  arr_1.each do |value|
    while i2 < arr_2.size && arr_2[i2] <= value
      result << arr_2[i2]
      i2 += 1
    end
    
    result << value
  end
  
  result.concat(arr_2[i2..-1]) 
end

p merge([1, 5, 9], [2, 3, 5, 6, 8]) #== [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]