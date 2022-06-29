def decrease(counter)
  counter - 1
end

counter = 10

until counter < 1 do
  puts counter
  counter = decrease(counter)
end

puts 'LAUNCH!'