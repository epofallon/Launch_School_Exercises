# UNDERSTAND THE PROBLEM
=begin
  - Input: a non-empty string argument
  - Output: the middle character or characters of the argument
    - if the argument has an odd length, you should return one character
    - if the argument has an even length, you should return two characters
    
    - if string is odd, then middle is at index of (length / 2)
    - if string is even then middle is at index of (length / 2 - 1) & (length / 2)
=end

# TEST CASES / EXAMPLES 
=begin
  center_of('I love ruby') == 'e'
  center_of('Launch School') == ' '
  center_of('Launch') == 'un'
  center_of('Launchschool') == 'hs'
  center_of('x') == 'x'
  
=end

# DATA STRUCTURES
=begin
  - start with string
  - manipulate string or convert to an array of charaters
  - end with string
=end

# ALGORITHM
=begin
  - capture string length / 2
  - if string is odd
    - capture charachter at length / 2
  - if string is even
    - capture charachters at length / 2 - 1 && length / 2
  - return middle charachter(s)
=end

def center_of(string)
  middle = string.length / 2
  if string.length.odd?
    string[middle]
  else
    string[middle -1, 2]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'