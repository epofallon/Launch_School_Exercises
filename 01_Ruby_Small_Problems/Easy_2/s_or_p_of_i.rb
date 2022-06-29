def prompt(message)
  puts ">> #{message}"
end

def calc_sum(num)
  (1..num).inject(:+)
end

def calc_prod(num)
  (1..num).inject(:*)
end

prompt 'Please enter an integer greater than 0:'
number = gets.chomp.to_i
prompt "Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp.downcase

case operation
  when 's'
    sum = calc_sum(number)
    prompt "The sum of the integers between 1 and #{number} is #{sum}."
  when 'p'
    product = calc_prod(number)
    prompt "The product of the integers between 1 and #{number} is #{product}."
  else
    promp 'Whoops! Unknown operation...'
end