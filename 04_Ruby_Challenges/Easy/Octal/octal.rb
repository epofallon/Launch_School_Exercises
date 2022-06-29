=begin
=== Understand the Problem ===
- Implement octal to decimal conversion.
- input: an octal string
  - treat invalid input as 0
- output: a decimal

- 233 decimal
  [2 * 10^2] + [3 * 10^1] + [3 * 10^0] = 233
- 233 octal
  [2 * 8^2] + [3 * 8^1] + [3 * 8^0] = 128 + 24 + 3 = 155
  
  total = 0
  8 * total + 8 = 8
  8 * total + 3 = 11
  8 * total + 0 = 88
  
=== Data Structure ===
- an array of digits

=== Algorithm ===
- constructor
  - assign @octal to the input string

- to_deciaml
  - initialize a sum to 0
  - iterate through the digits of the octal number
    - convert each digit to an integer
    - reassign sume to (8 * sum) + digit
  - return sum
=end

class Octal
  def initialize(octal)
    @octal = octal
  end

  def to_decimal
    return 0 unless valid_input?

    @octal.chars.map(&:to_i).reduce(0) {|sum, digit| 8 * sum + digit}
  end
  
  def valid_input?
    @octal.gsub(/[^0-7]/, '') == @octal
  end
end
