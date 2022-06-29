# UNDERSTAND THE PROBLEM
=begin
  - Write a method that takes a positive integer, 'n', as an argument.
  - Method displays a right triangle whose sideds each have n stars.
  - Hypotenuse should be positioned from lower-left to upper right.
  
  - explicit requirements:
    - triangle is 'n' number of stars wide
    - widest row is at the bottom
    - triangle is 'n' number of stars tall
    - tallest column is on the right
  -imlicit requirements:
    - white space used to position hypotenuse
    - returns 'nil' because method displays an output
=end

# EXAMPLES / TEST CASES
=begin
  triangle(5)

      *
     **
    ***
   ****
  *****
  
  triangle(9)

          *
         **
        ***
       ****
      *****
     ******
    *******
   ********
  *********
  
  - We always start with one start
  - The row we are on is also the number of stars in that row
  - including white space all rows are the same length, which is the input integer
=end

# DATA STRUCTURES
  # We seem to be dealing with strings
  
# ALGORITHM
=begin
  1. initiate original string variable as '*'
  2. from 1 to input integer multiply '*'
  3. prepend white space to make string the length of input integer
  4. display each result
=end

# CODE WITH INTENT
def top_right_triangle(num_of_stars)
  string = '*'
  num_of_stars.downto(1).each do |current_num|
    row =  string * current_num
    puts row.rjust(num_of_stars)
  end
end

def top_left_triangle(num_of_stars)
  string = '*'
  num_of_stars.downto(1).each do |current_num|
    row =  string * current_num
    puts row.ljust(num_of_stars)
  end
end

def bottom_right_triangle(num_of_stars)
  string = '*'
  (1..num_of_stars).each do |current_num|
    row =  string * current_num
    puts row.rjust(num_of_stars)
  end
end

def bottom_left_triangle(num_of_stars)
  string = '*'
  (1..num_of_stars).each do |current_num|
    row =  string * current_num
    puts row.ljust(num_of_stars)
  end
end

def triangle(num_of_stars, orientation=4)
  case orientation
  when 1 then top_right_triangle(num_of_stars)
  when 2 then top_left_triangle(num_of_stars)
  when 3 then bottom_right_triangle(num_of_stars)
  when 4 then bottom_left_triangle(num_of_stars)
  end
end

triangle(5,1) # top right
triangle(5,2) # top left
triangle(5,3) # bottom right
triangle(5,4) # bottom left