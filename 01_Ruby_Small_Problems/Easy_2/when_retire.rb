print 'What is your age? '
current_age = gets.chomp.to_i

print 'At what age would you like to retire? '
retire_age = gets.chomp.to_i

reman_years = retire_age - current_age
current_year = Time.now.year
retire_year = current_year + reman_years
puts ''
puts "It's #{current_year}. You will retire in #{retire_year}."
puts "You have only #{reman_years} years of work to go!"