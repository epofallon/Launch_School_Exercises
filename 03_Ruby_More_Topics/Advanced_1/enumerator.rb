# Create a new Enumerator object
# Can iterate over an infinite list of factorials
# test by printing out the first 7 factorial values
# starting with zero factorial

# Use an 'External Iterator'

# You'll need 3 enumerator method to complete this exercise
# Enumerator also implements the Enumerable module.

factorial = Enumerator.new do |yielder|
  num = 0
  accum = 1
  
  loop do
    accum = num == 0 ? 1 : accum * num
    yielder << accum
    num += 1
  end
end

# External iterators

6.times { |number| puts "#{number}! == #{factorial.next}" }
puts "=========================="
6.times { |number| puts "#{number}! == #{factorial.next}" }
puts "=========================="
factorial.rewind
6.times { |number| puts "#{number}! == #{factorial.next}" }
puts "=========================="

# Internal iterators

factorial.each_with_index do |value, number|
  puts "#{number}! == #{value}"
  break if number >= 5
end