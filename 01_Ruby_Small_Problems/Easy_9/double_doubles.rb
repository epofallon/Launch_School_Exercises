# UNDERSTAND THE PROBLEM
=begin
  - what is a double number?
    - a number with an even number of digits
    - the left-side digits are exactly the same as its rigth-side digits
      - examples:
        44     =>   4|4
        3333   =>  33|33
        103103 => 103|103
        7676   =>  76|76
      - non-examples:
        444    =>  44|4
        334433 => 334|433
        107    =>  10|7
  
  - input: an integer
  - output: an integer
    - if a double number, the original number is returned
    - if anything else the number is doubled then returned
=end

# EXAMPLES / TEST CASES
=begin
  twice(37) == 74                                           # RETURNED DOUBLED
  twice(44) == 44                                           # RETURNED ORIGINAL
  twice(334433) == 668866                                   # RETURNED DOUBLED
  twice(444) == 888                                         # RETURNED DOUBLED
  twice(107) == 214                                         # RETURNED DOUBLED
  twice(103103) == 103103                                   # RETURNED ORIGINAL
  twice(3333) == 3333                                       # RETURNED ORIGINAL
  twice(7676) == 7676                                       # RETURNED ORIGINAL
  twice(123_456_789_123_456_789) == 123_456_789_123_456_789 # RETURNED ORIGINAL
  twice(5) == 10                                            # RETURNED DOUBLED
=end

# DATA STRUCTURE
  # input is integer
  # check double as string
  # output is integer

# ALGORITHM
=begin
  - if it is a double ** see other algortihm
    - return the original number
  - else
    - return the number doubled
    
  - check double algortihm
    - convert number to string
    - if string length is even
      - split number in half into two numbers
      - see if two numbers are equal
=end

def twice(num)
  is_double?(num) ? num : num * 2
end

def is_double?(num)
  num_of_digits = num.to_s.length
  if num_of_digits.even?
    divider = ('1' + '0' * (num_of_digits / 2)).to_i
    first_half, second_half = num.divmod(divider)
    first_half == second_half
  end
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10