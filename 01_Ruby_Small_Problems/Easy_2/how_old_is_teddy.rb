def age
  rand(20..200)
end

puts "What is your name?"
name = gets.chomp
puts name.inspect
name = 'Teddy' if name == ''
puts "#{name} is #{age} years old!"