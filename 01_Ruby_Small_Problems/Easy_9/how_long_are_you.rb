# UNDERSTAND THE PROBLEM
=begin
  - input: a string
  - output: an array of strings
    - strings are every word from the input with a space and the word length appended.
  
  - Exlicit Requirements:
    - words are separated by exactly one space
    - and substring of non-space characters is a word
  - Implicit Requirements:
    - An empty string will return an empty array
=end

# EXAMPLES AND TEST CASES
=begin
  word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

  word_lengths("baseball hot dogs and apple pie") ==
    ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
  
  word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
  
  word_lengths("Supercalifragilisticexpialidocious") ==
    ["Supercalifragilisticexpialidocious 34"]
  
  word_lengths("") == []
=end

# DATA STRUCTURE
  # input: a string
  # the array of strings
  # output: an array of strings
  
# ALGORITHM
=begin
  - split the string into an array of words
  - map over each word
  - add ' 0' to each word
=end

def word_lengths(string)
  string.split(' ').map { |word| "#{word} #{word.length}" }
end

p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []