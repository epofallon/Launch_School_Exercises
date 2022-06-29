=begin
-- BUBBLE SORT --

- each pair of consecutive elements is compared
- if the first of the two is greater than the second, the elements are swapped.
- this process is repeated until a complete pass is made without performing any swaps.

- can assume the array will contain at least two elements.
- sorts the array in place.

- Data structure: Array

- Algorithm:
  - initialize a variable to `true` (indicates if we have swapped or not)
  - loop while swapped is `true`
    - set swapped to `false`
    - iterate through the array up to the 2nd-to-last element
    - if the first element of the array is greater than the next element
      - swap the elements
      - set swapped to `true`
    - else iterate to the next element
=end

# Modify the method so it takes an optional block.
# The optional block determines which of two consecutive
# elements will appear first in the results.
require 'pry'

def bubble_sort!(arr)
  last_idx = arr.size - 2
  swapped = true 
  
  
  while swapped
    swapped = false
    0.upto(last_idx) do |idx|
      next if block_given? && yield(arr[idx], arr[idx + 1])
      next if (arr[idx] < arr[idx + 1]) && !block_given?
      
      arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
      swapped = true
    end
    last_idx -= 1
  end
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
p array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
p array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
p array == %w(alice bonnie Kim Pete rachel sue Tyler)