# Understand the Problem
=begin
  - A featured number is:
    - an odd number
    - divisible by 7
    - all digits are unique
    
    - input: a single integer argument
    - output: the next featured number after that is greater than the argument.
      - Return an error message if there is no next featured number
=end

# Exapmles / Test Cases
=begin
  featured(12) == 21
  featured(20) == 21
  featured(21) == 35
  featured(997) == 1029
  featured(1029) == 1043
  featured(999_999) == 1_023_547
  featured(999_999_987) == 1_023_456_987

  featured(9_999_999_999) # -> There is no possible number that fulfills those requirements
=end

# Data Structure
  # An integer
  
# Algorithm
=begin
  - iterate through numbers divisible by 7
    - start with the next number divisible by 7 after the provided number
  - break if number is odd and integers are unique
    - determine if unique by convert to array and remove duplicates and check if it is unchanged
=end
def uniq?(num)
  num.to_s.chars == num.to_s.chars.uniq
end
require 'pry'

def featured(num)
  return "There is no possible number that fulfills those requirements" if num >= 9_876_543_201
  sevens_num = (num / 7 + 1) * 7
  sevens_num += 7 unless sevens_num.odd?
  
  loop do
    break if uniq?(sevens_num)
    sevens_num += 14
  end
  sevens_num
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987
p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements