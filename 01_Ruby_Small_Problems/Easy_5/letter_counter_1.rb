#start with a string of words separated by spaces
#split that string into an array of words
#measure the length of each word and increment it in our hash
def word_sizes(string)
  sizes = Hash.new(0)
  string.split.each{ |word| sizes[word.delete('^a-zA-Z').length] += 1 }
  sizes
end

puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
puts word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
puts word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
puts word_sizes('') == {}