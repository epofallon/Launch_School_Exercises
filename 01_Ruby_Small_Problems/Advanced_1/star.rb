# Understand the Problem
=begin
  Write a method that displays an 8-pointed star in an n x n grid,
  where 'n' is an odd integer that is supplied as an argument to the method.
  
  The smallest start you need to handle is a 7 x 7 grid

[*][ ][ ][*][ ][ ][*]
[ ][*][ ][*][ ][*][ ]
[ ][ ][*][*][*][ ][ ]
[*][*][*][*][*][*][*]
[ ][ ][*][*][*][ ][ ]
[ ][*][ ][*][ ][*][ ]
[*][ ][ ][*][ ][ ][*]

  - input: a single, odd integer
  - output: display a start
  - explicit rules:
    - star is 8 pointed
    - no need to handle grids smaller than 7x7
  - implicit rules:
    - middle line is stars all the way across
    - 1st from middle has out stars at middle -1/+1
    - 2nd from middle has out stars at middle -2/+2
    - 3rd from middle has out stars at middle -3/+3
    - etc...
    
=end

# Examples / Test Cases
=begin
star(7)
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9)
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
=end

# Data Structure
 # an Array of Strings that represent lines

# Algorithm
=begin
  - initialize empty 'lines' array
  - initialize center as num / 2
  - from -center to +center each line_num
    - if line_num == 0
      lines << '*' * num
    - else
      - spaces = ' ' * num
      - spaces[center - line_num] = '*'
      - spaces[center] = '*'
      - spaces[center + line_num] = '*'
      - lines << spaces
  - display each line
=end

def star(num)
  center = num / 2
  (-center).upto(center) do |line_num|
    if line_num == 0
      puts '*' * num
    else
      spaces = ' ' * num
      spaces[center - line_num] = '*'
      spaces[center] = '*'
      spaces[center + line_num] = '*'
      puts spaces
    end
  end
end


star(33)