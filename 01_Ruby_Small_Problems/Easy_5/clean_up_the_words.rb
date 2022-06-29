ALPHABET = ('a'..'z').to_a

def cleanup(string)
  string.gsub(/[^a-z]/i, ' ').tr_s(' ', ' ')
end
#split my string into all the individual characters
#Keep the letters
#substitute a ' ' for the first non-alphabet character in a series of non-alphabet characters
#delete the trailing non-alphabet characters
#return a rejoined string
def cleanup2(string)
  clean_chars = []
  string.chars.each do |char|
    if ALPHABET.include? char
      clean_chars << char
    else
      clean_chars << ' ' unless clean_chars.last == ' '
    end
  end
  clean_chars.join
end

p cleanup("---what's my +*& line?") #== ' what s my line '
p cleanup2("---what's my +*& line?")