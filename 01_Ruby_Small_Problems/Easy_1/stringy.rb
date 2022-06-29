def stringy(num, switch=1)
  string = ''
  num.times do |i|
    if switch == 1
      i.even? ? string << '1' : string << '0'
    else
      i.odd? ? string << '1' : string << '0'
    end
  end
  string
end

puts stringy(6,0) == '010101'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'