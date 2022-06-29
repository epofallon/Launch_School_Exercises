=begin
=== Understand the Problem ===
- input: a single letter
- output: a diamond shape
  - returns the diamond starting with A, with the letter supplied at the widest
    point.

=== Examples ===
- Diamond for 'A'
A

- Diamond for 'D'
   A    --> [ ][ ][ ][A][ ][ ][ ] 0
  B B   --> [ ][ ][B][ ][B][ ][ ] 1
 C   C  --> [ ][C][ ][ ][ ][C][ ] 2
D     D --> [D][ ][ ][ ][ ][ ][D] 3
 C   C  --> [ ][C][ ][ ][ ][C][ ] 2
  B B   --> [ ][ ][B][ ][B][ ][ ] 1
   A    --> [ ][ ][ ][A][ ][ ][ ] 0

=== Data Structure ===
- an array of strings, that will then be joined together

=== Algorithm ===
- Diamond::make_diamond
  - initialize a result array to []
  - initialize middle space to ' '
  - iterate from 'A' to the supplied character with index
    - if index is 0
      - push char to result array
    - else
      - push char + middle space + char to result array
      - increment middle space by two spaces
  - reassign result array to elements first to last, then first to last -1
    reversed
  - center jsutify each element to result size, add a newline character
  - join
=end

class Diamond
  def self.make_diamond(input_char)
    lines = center_space_chars(input_char)
    lines += lines[0..-2].reverse
    lines.map { |str| str.center(lines.size) + "\n" }.join
  end

  class << self
    private

    def center_space_chars(input_char)
      space = ' '
      ('A'..input_char).map do |char|
        case char
        when 'A' then line = char
        else
          line = char + space + char
          space += '  '
        end
        line
      end
    end
  end
end
