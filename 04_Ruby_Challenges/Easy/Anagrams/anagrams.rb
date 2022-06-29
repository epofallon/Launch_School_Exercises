=begin
=== Understand the Problem ===
- Takes a word and a list of possible anagrams
- Selects the correct sublist that contains the anagrams of the word
- returns an empty list in no match is given
- need an `Anagram` class
  - needs a constructor method that takes a string
  - needs a `match` method that takes an array & returns a new array
- The identical word is NOT an anagram
- anagrams are case sensitive

=== Test Cases === 
-> 'listen'
-> 'enlists', 'google', 'inlets', 'banana'
=> 'inlets' is returned in a list

=== Data Structure ===
- an array will do nicely

=== Algorithm ===
1. #initialize
- initialize an instance variable to the argument passed in

2. #match
- initialize an empty array for resulted anagrams
- set a checking word to the sorted version of the string in the instance variable
- iterate through the list passed in
  - if the sorted version of the current candidate is equal to the sorted checking word,
    but the candidate is not equal to the string in the instance variable
      - add that string to the list of anagrams
- retrun the list of anagrams
=end

class Anagram
  def initialize(string)
    @string = string
  end
  
  def match(candidates)
    candidates.select { |candidate| anagram?(candidate)}
  end
  
  def anagram?(candidate)
    sort(candidate) == sort(@string) && candidate.downcase != @string.downcase
  end
  
  def sort(str)
    str.downcase.chars.sort.join
  end
end