print 'What is the bill? '
bill = gets.chomp.to_f
print 'what is the tip percentage? '
tip_percent = ((gets.chomp.to_f) / 100)

puts ''

tip = bill * tip_percent
puts "The tip is $#{format("%.2f", tip)}"
total = bill + tip
puts "The total is $#{format("%.2f", total)}"