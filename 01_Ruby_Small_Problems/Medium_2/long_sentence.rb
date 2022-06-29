# Understand the Problem
=begin
  - reads the context of a text file
  - prints the longest sentece in the file based on number of words
  - sentences may end with (.), (!), or (?)
  - any sequence of characters that are not spaces or sentence-ending characters
    should be treated as a word
  - print the number of words in the longest sentence
  
  - input: a text file
  - output:
    - the longest sentence in the text file
    - the number of words in the longest sentence
  - explicit rules:
    - input is pulled from a text file
    - senteces are split by periods, exclamation marks, & question marks
    - any group of characters except ' ', '.', '?', & '!' is a word
    
=end

# Test Cases / Examples
=begin
  
=end

# Data Structure
  # read file into a string
  # an array of sentencecs to parse
  
# Algorithm
=begin
  - read file into a string object
  - split string into an array of string sentences
    - text.split(/\.|\?|!/)
  - select the string with the largest number of words
    - split sentence into an array of words
    - count # of words (array length)
    - if array_length is greater then current_longest sentence, save as new longest sentence
  - print that string
  - print the number of words
=end
require 'pry'
text = File.read("text.txt").gsub("\n", ' ')

longest_sentence = ''
start_index = 0
words = text.split(' ')
words.each_with_index do |word, index|
  if %w(. ! ?).include?(word[-1])
    #binding.pry
    sentence = words[start_index..index]
    if sentence.length > longest_sentence.split(' ').length
      longest_sentence = sentence.join(' ')
    end
    start_index = index + 1
  end
end

=begin
sentences = text.split(/\.|\?|!/)
longest_sentence = ''

sentences.each do |sentence|
  if sentence.split(' ').length > longest_sentence.split(' ').length
    longest_sentence = sentence
  end
end
=end
p longest_sentence.strip
p longest_sentence.split(' ').length