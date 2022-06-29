def xor?(bool1, bool2)
  if bool1 && bool2
    false
  elsif bool1 || bool2
    true
  else
    false
  end
end

puts xor?(5.even?, 4.even?)# == true
puts xor?(5.odd?, 4.odd?) #== true
puts xor?(5.odd?, 4.even?) #== false
puts xor?(5.even?, 4.odd?) #== false