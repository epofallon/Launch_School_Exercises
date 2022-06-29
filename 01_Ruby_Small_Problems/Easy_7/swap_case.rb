# UNDERSTAND THE PROBLEM
=begin
 - Rules / Requirements
  - Input: takes a string as an argument
  - Output: A new string with the case of every letter swapped
  - non alphabetic characters are left alone
  - cannot use String#swapcase
=end

# EXAMPLES / TEST CASES
=begin
  swapcase('CamelCase') == 'cAMELcASE'
  swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'
=end

# DATA STRUCTURE
  # String converted to an array of characters
  # modified array of characters converted back to a string
  
# ALGORITHM
=begin
  - convert argument string into an array of characters
  - iterate over array with the intention to transform
    - if a letter is included in 'a'..'z'
       - swap lowercase letters for uppercase
    - if a letter is included in 'A'..'Z'
      - swap uppercase letters for lowercase
    - else do nothing
  - join the array back into a single string
=end

def swapcase(string)
  string.chars.map do |char|
    if ('a'..'z').include?(char)
      char.upcase
    elsif ('A'..'Z').include?(char)
      char.downcase
    else
      char
    end
  end.join
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'