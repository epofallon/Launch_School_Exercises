# UNDERSTAND THE PROBLEM
=begin
  - input: two integers
    - the first integer is a count
      - will always have a value of 0 or greater
      - if count is 0 an empty array should be returned
    - the second integer is the first number of a sequence
  - output: an array of integers
    - array will have the same number of elements as the count argument
    - values will be increments of the starting number
    
    sequence(COUNT, FIRST_NUMBER)
=end

# EXAMPLES / TEST CASES
=begin
  p sequence(5, 1) == [1, 2, 3, 4, 5]
  p sequence(4, -7) == [-7, -14, -21, -28]
  p sequence(3, 0) == [0, 0, 0]
  p sequence(0, 1000000) == []
=end

# DATA STRUCTURE
  # an array

# ALGORITHM
=begin
  - initiate an empty array
  - iterate upto 'count'
    - add start num * count to array
  - return array when done iterating
=end

def sequence(count, start)
  result_arr = []
  1.upto(count) do |count|
    result_arr << count * start
  end
  result_arr
end

p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []