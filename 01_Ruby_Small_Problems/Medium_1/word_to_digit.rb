# Understand the Problem
=begin
  - input: a sentence string
  - convert 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    to 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  - output: the sentence with the words replaced as digits
  
  -explicit rules
    - replace words with digits
  - implicit rules
    - split strings by spaces
    - non alphanumeric charachters next to words are not evaluated
    - ' '  '.'  ',' 
=end

# Examples / Test Cases
=begin
  word_to_digit('Please call me at five five five one two three four. Thanks.')
  == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
=end

# Data Strucutre
  # String -> Array of strings -> String
    # Array of strings represents each word
    
# Algorithm
=begin
  - set constant NUMS {'zero'=>'0', 'one'=>'1', 'two'=>'2',...}
  - split sentence into words
  - switch word for number if word is in NUMS keys
  - join together with spaces
=end

NUMS = {'zero'=>'0', 'one'=>'1', 'two'=>'2', 'three'=>'3', 'four'=>'4',
        'five'=>'5', 'six'=>'6', 'seven'=>'7', 'eight'=>'8', 'nine'=>'9',
        'Zero'=>'0', 'One'=>'1', 'Two'=>'2', 'Three'=>'3', 'Four'=>'4',
        'Five'=>'5', 'Six'=>'6', 'Seven'=>'7', 'Eight'=>'8', 'Nine'=>'9',
}

def word_to_digit(string)
  NUMS.each do |word, digit|
    string.gsub!(/\b#{word}\b/, digit)
  end
  string
end

p word_to_digit('Please call me at five Five five One two three four. Thanks.')