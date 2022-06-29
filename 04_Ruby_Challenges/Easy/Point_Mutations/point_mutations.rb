=begin
=== Understand the Problem ===
- Write a progam that can calculate the Hamming distance between two DNA strands
- strands taken from different animals, with an ancestor
- mutations are differences in the genetic makeup
- the Hamming distance is the number of point mutations that could have occurred
- only defined for sequences of equal length
- test the shorter length if you have uneven sequences
=== Examples ===
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

=== Data Structure ===
- input as 'strings'
- work with arrays of characters

=== Algorithm ===
- constructor
  - assign input string to an instance variable

- hamming_distance
  - compare each character in the strings (instance variable and string passed in)
  - initialize h_num to 0
  - loop through the string of characters with index
    - check if character is equal to character at other length
  - return h_num
The Hamming Number here is 7
=end

class DNA
  def initialize(strand)
    @strand = strand
  end
  
  def hamming_distance(other_strand)
    h_num = 0
    
    @strand.chars.each_with_index do |char, idx|
      break if other_strand[idx].nil?
      h_num += 1 unless char == other_strand[idx]
    end
    
    h_num
  end
end
