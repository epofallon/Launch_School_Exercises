# UNDERSTAND THE PROBLEM
=begin
  - Rules / Requirements
    - Input: an array of integers
    - Output: prints to the screen a string containing the result integer
    
    - multiplies all the numbers together
    - divides the multiplied number by the number of integers in the array
      - round this number to three decimal places
=end

# TEST CASES / EXAMPLES
  # show_multiplicative_average([3, 5])                # => The result is 7.500
  # show_multiplicative_average([6])                   # => The result is 6.000
  # show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667
  
# DATA STRUCTURE
  # iterate over an array
  # sum a float
  # print a string
  
# ALGORITHM
=begin
  - initialize sum as 1.0
  - iterate over the array
    - multiply sum by each element and replace sum with result
  - divide total sum by array length
  - puts string with rounded sum
=end

def show_multiplicative_average(array)
  sum = 1.0
  array.each{ |num| sum *= num}
  sum /= array.size
  puts "The result is #{sum.round(3)}"
end

show_multiplicative_average([3, 5])                # => The result is 7.500
show_multiplicative_average([6])                   # => The result is 6.000
show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.6