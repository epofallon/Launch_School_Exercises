=begin
=== Understand the Problem ===
- Given a word, compute the Scrabble score for that word
Letter -----------------------> Value
A, E, I, O, U, L, N, R, S, T -> 1
D, G -------------------------> 2
B, C, M, P -------------------> 3
F, H, V, W, Y ----------------> 4
K	----------------------------> 5
J, X ------------------------->	8
Q, Z -------------------------> 10

- sum the values of all the tiles used in each word
- nil returns 0
- other characters other than letters return 0
- #score takes an optional argument
- #initialize also takes an optional argument

=== Examples ===
- CABBAGE -> 3 + 1 + 3 + 3 + 1 + 2 + 1 -> 14

=== Data Structure ===
- an array of characters, then values

=== Algorithm ===
- Define a constant with points as keys and an array of letters as values
- If no argument assign the instance variable to nil

- If no argument passed, assign the parameter to nil
- Check which to use (instance variable or local variable)
- Return 0 if nil
- remove all non letter chars
=end

class Scrabble
  CHAR_VALUES = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2,
                 H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1,
                 O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1,
                 U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10}
  
  def initialize(word=nil)
    @word = word
  end
  
  def score
    return 0 if @word.nil?
    
    word = @word.gsub(/[^A-Z]/i, '').upcase
    word.chars.map { |char| CHAR_VALUES[char.to_sym] }.sum
  end
  
  def self.score(word)
    self.new(word).score
  end
end
