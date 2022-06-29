# Understand the Problem
=begin
  - to be a valid triangle
    - the sum of the two shorter sides must be greater than the length of the hypotenues
    - all sides must have a length greater than 0
  
  - write a method that takes the lengths of the 3 sides of a triangle as arguments
    - input: three numbers (integer or float)
    - output: a symbol [:equilateral, isosceles, : scalene, :invalid]
  - explicit rules:
    - to be a valid triangle
      - the sum of the two shorter sides must be greater than the length of the hypotenues
      - all sides must have a length greater than 0
    - to be an equilateral triangle
      - all three sides are equal
    - to be an isosceles trianlge
      - two sides are equal
      - the third is different
    - to be a scalene triangle
      - no sides are the same
=end

# Examples / Test Cases
=begin
  triangle(3, 3, 3) == :equilateral
    - all three numbers are equal
  triangle(3, 3, 1.5) == :isosceles
    - two sides are equal
  triangle(3, 4, 5) == :scalene
    - all sides are different
  triangle(0, 3, 3) == :invalid
    - cannot have a 0 side
  triangle(3, 1, 1) == :invalid
    - sum of two shorter sides must be greater than the third side
=end

# Data Structure
  # put the three sides in an array
  
# Algorithm
=begin
  - check unless valid triangle
    - array include 0 ?
    - sum of two shorter sides greater than third side ?
      - :invalid
  - check if equilateral
    - all three sides equal ?
      - :equilateral
  - check if isosceles
    - two side equal ?
      - :isosceles
  - else scalene
    - :scalene
    
  - length_sum?(sides)
    - sum the 2 smaller sides and compare against the largest side
    - return true if sum is greater than largest side
=end
require 'pry'
def length_sum?(sides)
  sides.min(2).sum < sides.max
end

def all_equal?(sides)
  sides[0] == sides[1] && sides[1] == sides[2]
end

def two_equal?(sides)
  sides[0] == sides[1] || sides[1] == sides[2] || sides[0] == sides[2]
end

def triangle(side1, side2, side3)
  sides = [side1, side2, side3]
  case
  when sides.include?(0), length_sum?(sides) then :invalid
  when all_equal?(sides) then :equilateral
  when two_equal?(sides) then :isosceles
  else :scalene
  end
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid