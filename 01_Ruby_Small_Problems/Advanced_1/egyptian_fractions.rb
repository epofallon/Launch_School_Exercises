# Understand the Problem
=begin
  - Write a method that takes a Rational Number as an argument, and returns an Array of the denominators that are part of an Egyptian fraction representation of the number
  
  - Write another method that takes an Array of numbers in the same format, and calculates the resulting Rational number
  
  - Questions:
    - What is a Rational Number?
      - Any number that can be represented as the result of the division between two integers
      - 1/3, 3/2, 22/7
    - What is an Egyptian Fraction?
      - The sum of a series of distinct unit fractions (no two are the same), such as:
      - 1   1    1    1
        - + - + -- + --
        2   3   13   15
        
      - What are Unit Fractions?
        - A Rational Number where the numerator is 1
        
      - Every possible Rational Number can be written as an Egyptian Fraction
        -     1   1   1   1
          2 = - + - + - + -
              1   2   3   6
=end

# Examples / Test Cases
=begin
  egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
  egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
  egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]
=end

# Data Structure
=begin
  - A Array to house the denominators of each rational
=end

# Algorithm
=begin
  - initialize 'denoms' as an empty Array
  - initiailize 'egypt_sum' as 0
  - until a sum is equal to the inputed Rational Number
    - if Rational(1,n) is less or equal to the input Rat minus the Egypt Sum
      - push Rational(1,n) to 'denoms' Array
    - increment n by 1
    - break if Egypt Sum is equal to Input Rat
  - Return 'denoms' Array
=end
require 'pry'
def egyptian(rat)
  denoms = []
  egypt_sum = 0
  count = 1
  
  until egypt_sum == rat do
    u_frac = Rational(1, count)
    if u_frac <= (rat - egypt_sum)
      denoms << u_frac.denominator
      egypt_sum += u_frac
    end
    count += 1
  end
  denoms
end

def unegyptian(denoms)
  denoms.inject(Rational(0)) { |rat, denom| rat + Rational(1, denom) }
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
p unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
p unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
p unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
p unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
p unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
p unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
p unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)