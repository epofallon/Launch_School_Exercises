def century(year)
  if year % 100 == 0
    cent = year / 100
  else
    cent = year / 100 + 1
  end
  add_ending(cent)
end

def add_ending(cent)
  digits = cent.digits
  if digits[0] == 1 && digits[1] != 1
    cent = cent.to_s + 'st'
  elsif digits[0] == 2 && digits[1] != 1
    cent = cent.to_s + 'nd'
  elsif digits[0] == 3 && digits[1] != 1
    cent = cent.to_s + 'rd'
  else
    cent = cent.to_s + 'th'
  end
  cent
end

# puts 'Give me a year:'
# year = gets.chomp.to_i



puts "#{2000} => #{century(2000)}"
puts "#{2001} => #{century(2001)}"
puts "#{1965} => #{century(1965)}"
puts "#{256} => #{century(256)}"
puts "#{5} => #{century(5)}"
puts "#{10103} => #{century(10103)}"
puts "#{1052} => #{century(1052)}"
puts "#{1127} => #{century(1127)}"
puts "#{11201} => #{century(11201)}"
