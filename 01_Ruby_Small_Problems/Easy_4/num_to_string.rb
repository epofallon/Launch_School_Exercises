DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(number)
  og_num = number
  number = number.abs
  result = ''
  loop do
    number, remainder = number.divmod(10)
    result.prepend(DIGITS[remainder])
    break if number == 0
  end
  
  if og_num > 0
    result.prepend('+')
  elsif og_num < 0
    result.prepend('-')
  end
  result
end

puts integer_to_string(4321) == '+4321'
puts integer_to_string(-123) == '-123'
puts integer_to_string(0) == '0'