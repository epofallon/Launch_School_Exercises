def palindromic_number?(int)
  int == int.to_s.reverse.to_i
end

puts palindromic_number?(34543)  #== true
puts palindromic_number?(0123210) #== false
puts palindromic_number?(22)     #== true
puts palindromic_number?(5)      #== true