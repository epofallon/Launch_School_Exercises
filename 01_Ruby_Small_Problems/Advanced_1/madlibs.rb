# Understand the Problem
=begin
  Make a madlibs program that:
  - reads in some text from a text file
  - plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into the text and prints it.
  - my list of nouns, verbs, adjectives, and adverbs can be built directly into the program
=end

# Examples / Test Cases
=begin
  Example Output:
    The sleepy brown cat noisily
    licks the sleepy yellow
    dog, who lazily licks his
    tail and looks around.
    
  Example Text Data:
    The %{adjective} brown %{noun} %{adverb}
    %{verb} the %{adjective} yellow
    %{noun}, who %{adverb} %{verb} his
    %{noun} and looks around.
=end


#WORDS = { adjective }
require 'pry'
text = File.read("madlibs.txt")
#binding.pry
adjectives = %w(quick lazy sleepy ugly gigantic thankful healthy cynical)
nouns = %w(fox dog head leg cat moose man woman tail paw)
verbs = %w(jumps lifts bites licks touches stabs fights spins hurdles)
adverbs = %w(easily lazily noisily excitedly gracefully)

text.each_line do |line|
  puts line.% adjective: adjectives.sample,
             noun: nouns.sample,
             verb: verbs.sample,
             adverb: adverbs.sample
end
