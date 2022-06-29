def reversed_number(num)
  if is_positive?(num)
    num.to_s.reverse.to_i
  else
    puts "#{num} is not a positive number."
  end
end

def is_positive?(num)
  num >= 0
end

p reversed_number(12345) == 54321
p reversed_number(12213) == 31221
p reversed_number(456) == 654
p reversed_number(12000) == 21 # No leading zeros in return value!
p reversed_number(12003) == 30021
p reversed_number(-1) == 1