# PROBLEM
#   Write a method that calculates and returns the index of the first Fibonacci
#   number that has the number of digits specified as an argument.
#   (The first Fibonacci number has index 1.)

# EXAMPLES / TEST CASES
#   find_fibonacci_index_by_length(2) == 7
#   find_fibonacci_index_by_length(3) == 12
#   find_fibonacci_index_by_length(10) == 45
#   find_fibonacci_index_by_length(100) == 476
#   find_fibonacci_index_by_length(1000) == 4782
#   find_fibonacci_index_by_length(10000) == 47847

# Input: Integer greater than 2 (represents the number of digits)

# Output: Integer that represents the index of the first number in
#         the Fibonacci sequence with the input's number of digits

# Rules:
#   Explicit Rules:
#   - Fibonacci sequence iterates until criteria is met
#   - Fibonacci sequence alwats starts with two 1's
#   Implicit Rules:
#   - Length of each number is checked before calcualting next number
#   - all iterations are recorded to count the index
#   - Returned integer is a different integer (integers are immutable)

# DATA STRUCTURE
# - Array to store the Fibonacci sequence

# ALGORITHM
# - find_fibonacci_index_by_length
#   - initialize fib_seq array as [1, 1]
#   - begin loop to create fibonacci sequence
#     - assign variable num to the sum of the last two numbers in fib_seq array
#     - append num to the end of fib_seq
#     - break loop if num's digits is equal to inputted length
#   - return fib_seq array length

def find_fibonacci_index_by_length(length)
  first = 1
  second = 1
  index = 2
  
  loop do
   index += 1
   fib = first + second
   break if fib.to_s.length >= length
   
   first = second
   second = fib
  end
  index
end

puts find_fibonacci_index_by_length(2)
puts find_fibonacci_index_by_length(3)
puts find_fibonacci_index_by_length(10)
puts find_fibonacci_index_by_length(100)
puts find_fibonacci_index_by_length(1000)
puts find_fibonacci_index_by_length(10000)