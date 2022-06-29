# UNDERSTAND THE PROBLEM
=begin
  Write a method that can rotate the last 'n' digits of a number.
  - Explicit Rules:
    - rotating just one digit returns the original number
    - 'n' is always a positive number
  - Implicit Rules:
    - number is converted to s string, then an array, manipulated, then converted back
=end

# EXAMPLES / TEST CASES
=begin
  rotate_rightmost_digits(735291, 1) == 735291
  rotate_rightmost_digits(735291, 2) == 735219
  rotate_rightmost_digits(735291, 3) == 735912
  rotate_rightmost_digits(735291, 4) == 732915
  rotate_rightmost_digits(735291, 5) == 752913
  rotate_rightmost_digits(735291, 6) == 352917
=end

# DATA STRUCTURE
  # Integer -> String -> Array -> String -> Integer
  
# Algorithm
=begin
  convert integer to array
  slice the end of the array, send to rotate_array
  set return to replace the original slice
  return as integer
=end
require 'pry'
def rotate_array(array)
  
  array[1..-1] + [array[0]]
end

def rotate_rightmost_digits(integer, digits)
  arr = integer.to_s.chars
  arr[-digits..-1] = rotate_array(arr[-digits..-1])
  arr.join.to_i
end

def max_rotation(integer)
 num_of_chars = integer.to_s.size
 num_of_chars.downto(2) do |num|
   integer = rotate_rightmost_digits(integer, num)
 end
 integer 
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845