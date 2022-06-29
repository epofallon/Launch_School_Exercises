# Understand the Problem
=begin
  - display a four point diamond in a n x n grid
    - n is an odd integer that is supplied as an argument
      - assume n is always an odd integer
  
  input: an odd integer
  output: display a n x n diamond
  explicit rules:
  - diamond is four-pointed
  - integer supplied determines the grid
  implicit rules
  - on the rows without 'n' stars, spaces fill it
=end

# Examples / Test Cases
=begin
  diamond(1)
  
  *
  
  diamond(3)
  
   * 
  ***
   * 
   
  diamond(5)
    *
   ***
  *****
   ***
    *
  - spaces are only needed on the left side of the stars when < n stars in a row
=end

# Data Structure
  # An array of strings

# Algorithm
=begin
  Get an odd number
  initialize count as 1
  initialize arr as []
  initialize spacer as odd_num / 2 + 1
  loop from 1 to n and back down to 1
    push ('*' x count).rjust(spacer) to arr
    if count < odd_num
      add 2 to count
    else
      subtract 2 from count
    break loop if arr.length = odd_num
  print each element of arr to the screen
=end
=begin
def make_lines(odd_num)
  arr = []
  count = 1
  increment = 2
  loop do
    arr << ('*' * count).center(odd_num)
    increment = -2 if count == odd_num
    count += increment
    break if arr.length == odd_num
  end
  arr
end

def diamond(odd_num)
  arr = make_lines(odd_num)
  arr.each{ |line| puts line }
end
=end
require 'pry'

def print_row(grid_size, distance_from_center)
  number_of_stars = grid_size - 2 * distance_from_center
  stars = outline_stars(number_of_stars)
  puts stars.center(grid_size)
end

def outline_stars(number_of_stars)
  number_of_stars == 1 ? '*' : "*#{' ' * (number_of_stars - 2)}*"
end

def diamond(grid_size)
  max_distance = grid_size / 2
  max_distance.downto(0) { |distance| print_row(grid_size, distance) }
  1.upto(max_distance)   { |distance| print_row(grid_size, distance) }
end

diamond(7)