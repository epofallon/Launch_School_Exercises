def multiply(num1, num2)
  num1 * num2
end

def square(num1, power)
  total = num1
  power -= 1
  power.times do
    total = multiply(num1, total)
  end
  total
end

puts square(5,0)