# UNDERSTAND THE PROBLEM
=begin
  - inputs:
    - the first is the starting number
    - the second is the ending number
    
=end

def fizzbuzz(start_num, end_num)
  result_arr = []
  (start_num..end_num).each do |num|
    result_arr << what_do(num)
  end
  puts result_arr.join(', ')
end

def what_do(num)
  if num % 3 == 0 && num % 5 == 0
    'FizzBuzz'
  elsif num % 3 == 0
    'Fizz'
  elsif num % 5 == 0
    'Buzz'
  else
    num
  end    
end

fizzbuzz(1, 15)
puts '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'