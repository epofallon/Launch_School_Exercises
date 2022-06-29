
puts 'Enter the length of the room in meters:'
length = gets.chomp.to_f
puts 'Enter the width of the room in meters:'
width = gets.chomp.to_f
metric_area = length * width
english_area = metric_area * 10.7639
puts "The area of the room is #{metric_area} square meters (#{english_area} square feet)."