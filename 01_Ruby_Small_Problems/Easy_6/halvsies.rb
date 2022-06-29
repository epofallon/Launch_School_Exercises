# UNDERSTAND THE PROBLEM
=begin
  - Explicit Rules
    - Takes and Array as an argument
    - returns a pair of nested arrays that contain the
      first half and second half of the original array, respectively
    - Middle element of odd number arrays goes to the 1st half array
  - Implicit Rules
  
  - Is the returned array the original object, or a new object?
    - 
    
  - Input: An array of any length
  - Output:Two nested arrays
    - The first nested array has the first half of elements from the original array
    - The second nested array has the second half of elements from the original array
=end

# TEST CASES / EXAMPLES
=begin
  halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
  halvsies([5]) == [[5], []]
  halvsies([]) == [[], []]
  
  - If the original array only has one element, the second half array is returned empty
  - If the original array is empty, both halve arrays return empty
=end

# DATA STRUCTURES
  # Arrays for all
  
# ALGORITHM
=begin
  1. Create an empty result array
  2. Split the given array into two smaller arrays
    a. take elements from the original array and place them in another array
    b. increment until the 1st half array is equal or greater than what remains of the original array
  3. Push the two arrays we have into the result array
=end

def halvsies(arr)
  first_half = []
  loop do
    break if first_half.length >= arr.length
    first_half << arr.shift
  end
[first_half, arr]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]