
nth_number = ['1st', '2nd', '3rd', '4th', '5th', 'last']
numbers = []
nth_number.each do |nth|
  puts "==> Enter the #{nth} number:"
  numbers << gets.chomp.to_i
end

number = numbers.pop

if numbers.include? number
  puts "The number #{number} appears in #{numbers}."
else
  puts "The number #{number} does not appear in #{numbers}."
end