# Understand the Problem
=begin
  - A collection of spellin blocks has two letters per block:
    B:O   X:K   D:Q   C:P   N:A
    G:T   R:E   F:S   J:W   H:U
    V:I   L:Y   Z:M
  
  - This limits the words you can spell with the blocks to words that
    do not use both letters from any given block.
  - Each block can only be used once.
  
  - input: a one word string
  - output:
    - return 'true' if a word passed in can be spelled from the set of blocks
    - return 'false' otherwise
  - explicit rules:
    - words can only be spelled with one side of a block
      - i.e. can't use both the letters in a block
    - each block can only be used once
=end

# Examples / Test Cases
=begin
  block_word?('BATCH') == true
  block_word?('BUTCH') == false #=> U & H are the same block
  block_word?('jest') == true
=end

# Data Structure
=begin
  - [['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'], ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'], ['v', 'i'], ['l', 'y'], ['z', 'm']]
  - an array of 'block' arrays
=end

# Algorithm
=begin
  - loop through array of blocks
    - count number of times side_a appears in string
    - count number of times side_b appears in string
    - sum total counts
    - return 'false' if sum > 1
  - return 'true' if iterations complete
=end
BLOCKS = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm']
require 'pry'

def block_word?(word)
  word = word.downcase
  BLOCKS.all? { |block| word.count(block) < 2 }
end
p block_word?('BATCH') 
p block_word?('BUTCH') 
p block_word?('jest') 
p block_word?('starkl')