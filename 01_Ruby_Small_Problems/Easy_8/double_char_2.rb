CONSONANTS = %w(b c d f g h j k l m n p q r s t v w x y z)

def double_consonants(string)
  new_string = ''
  string.each_char do |char|
    char_multiplier = is_consonant?(char) ? 2 : 1
    new_string << char * char_multiplier
  end
  new_string
end

def is_consonant?(char)
  CONSONANTS.include? char.downcase
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""