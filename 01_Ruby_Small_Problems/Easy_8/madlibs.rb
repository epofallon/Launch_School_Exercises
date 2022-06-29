# UNDERSTAND THE PROBLEM
=begin
  - prompts for a noun, verb, adverb, and an adjective
    - inserts these prompts into a story that you create
  - input: four strings from the user
  - output: a story string that uses the user's input
=end

# EXAMPLES AND TEST CASES
=begin
  Do you \walk\ your \blue\      \dog\  \quickly\? That's hilarious!
  Do you \verb\ your \adjective\ \noun\ \adverb\?  That's hilarious!
=end

# DATA STRUCTURES
  # A hash that stores the user's input
  
# ALGORITHM
=begin
  - initiate a hash with the keys as the needed words
  - iterate through hash
    - prompt user for each input
  - print madlib to the screen
=end

# CODE WITH INTENT
words = { noun:      '',
          verb:      '',
          adjective: '',
          adverb:    '' }
          
words.each do |key, _|
  print "Enter a #{key}: "
  words[key] = gets.chomp
end

puts "Do you #{words[:verb]} your #{words[:adjective]} #{words[:noun]} #{words[:adverb]}? That's hilarious!"