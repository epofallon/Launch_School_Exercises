# Understand the Problem
=begin
  # Write a method that computes the difference between the square of the sum of
    the first 'n' positive integers and the sum of the squares of the first 'n'
    positive integers
    
  - input: a single, positive integer
  - output: a single integer
    - the difference between
      - the sum of (1..n), squared
      - (1..n) each squared, summed
=end

# Examples / Test Cases
=begin
  sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
  sum_square_difference(10) == 2640
  sum_square_difference(1) == 0
  sum_square_difference(100) == 25164150
=end

# Data Structure
=begin
  a range from 1..'n'
=end

# Algorithm
=begin
  Sum Squared
  - sum the range 1..n
  - square that number
  
  Squared Sum
  - square each number in range 1..n
  - sum those numbers
  
  - [Sum Squared] - [Squared Sum]
=end

def sum_squared(num)
  (1..num).inject(:+) ** 2
end

def squared_sum(num)
  (1..num).inject {|sum, n| sum + (n ** 2)}
end

def sum_square_difference(num)
  sum_squared(num) - squared_sum(num)
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150