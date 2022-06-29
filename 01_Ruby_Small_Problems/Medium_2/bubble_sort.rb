# Understand the Problem
=begin
  Write a method that takes an Array as an argument, and sorts that Array using
  the bubble sort algorithm.
  - The sort will be 'in-place' (it mutates the original array)
  - Assume the Array will contian at least two elements
  -------------------------
  arr = [9, 5, 6, 3, 1]
         0  1  2  3  4
  arr[0] <=> arr[1] => swap
  
  arr = [5, 9, 6, 3, 1]
         0  1  2  3  4
  arr[1] <=> arr[2] => swap
  
  arr = [5, 6, 9, 3, 1]
         0  1  2  3  4
  arr[2] <=> arr[3] => swap
  
  arr = [5, 6, 3, 9, 1]
         0  1  2  3  4
  arr[3] <=> arr[4] => swap
  -------------------------
  arr = [5, 6, 3, 1, 9]
         0  1  2  3  4
  arr[0] <=> arr[1] => keep
  arr[1] <=> arr[2] => swap
  
  arr = [5, 3, 6, 1, 9]
         0  1  2  3  4
  arr[2] <=> arr[3] => swap
  
  arr = [5, 3, 1, 6, 9]
         0  1  2  3  4
  arr[3] <=> arr[4] => keep
  -------------------------
  arr[0] <=> arr[1] => swap
  
  arr = [3, 5, 1, 6, 9]
         0  1  2  3  4
  arr[1] <=> arr[2] => swap
  
  arr = [3, 1, 5, 6, 9]
         0  1  2  3  4
  arr[2] <=> arr[3] => keep
  arr[3] <=> arr[4] => keep
  -------------------------
  arr[0] <=> arr[1] => swap
  
  arr = [1, 3, 5, 6, 9]
         0  1  2  3  4
  arr[1] <=> arr[2] => keep
  arr[2] <=> arr[3] => keep
  arr[3] <=> arr[4] => keep
  -------------------------
  arr = [1, 3, 5, 6, 9]
         0  1  2  3  4
  arr[0] <=> arr[1] => keep
  arr[1] <=> arr[2] => keep
  arr[2] <=> arr[3] => keep
  arr[3] <=> arr[4] => keep
  -------------------------
  
  - Input: an Array
  - Output: mutates the original Array
  - Explicit Rules:
    - Compare consecutive elements in the array
      - if the first of the two elements is greater perform a swap
    - Stop iterating the first time we make a pass through the array without making any swaps
=end

# Examples / Test Cases
=begin
  array = [5, 3]
  bubble_sort!(array)
  array == [3, 5]
  
  array = [6, 2, 7, 1, 4]
  bubble_sort!(array)
  array == [1, 2, 4, 6, 7]
  
  array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
  bubble_sort!(array)
  array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
=end

# Data Structure
  # An array of minimum 2 elments

# Algorithm
=begin
  - set pass_its as arr.length - 2
  - begin loop for sorting
    - no_swap = true
      - 0 upto pass_its
        - if arr[num] <=> arr[num + 1]
          - arr[num + 1], arr[num] = arr[num], arr[num + 1]
          - no_swap = false
    - break if no_swap == true
=end
require 'pry'
def bubble_sort!(arr)
  pass_its = arr.length - 1
  loop do
    new_end = 0
    1.upto(pass_its) do |num|
      #binding.pry
      if arr[num - 1] > arr[num]
        arr[num], arr[num - 1] = arr[num - 1], arr[num]
        new_end = num
      end
    end
    pass_its = new_end
    break if pass_its <= 1
  end
end
# fix!
array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)