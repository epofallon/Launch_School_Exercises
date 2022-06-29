=begin
=== Understand the Problem ===
# convert modern decimal numbers into their Roman number equivalents
1 -> I
5 -> V
10 -> X
50 -> L
100 -> C
500 -> D
1000 -> M

- You never write more than three of the same symbol when adding up
- You never write more than two of the same symbol when subtracting
=== Test Cases ===
7 -> VII
900 -> CM
90 -> XC
2000 -> MM
8 -> VIII
1990 -> MCMXC
- 1000 -> M
- 900  -> CM
- 90   -> XC

2008 -> MMVIII

=== Algorithm ===
- set a constant with conversions to roman numerals
- break appart the number into decimal places (1992 -> 1000, 900, 90, 2)
  - record the number of digits of num
  - record the starting_num
  - create an empty array
  - iterate the number of digits
    - pass each number to the block
    - reset the starting number and assign a remainder number to the results of
      calling #divmod(10) on the previous number
    - add to the array the result of conatenatin the current number of 0s on to the remainder
    
- determine what number with a direct conversion is closest to your current digit
  - iterate through the numbers that convert to roman numerals
  - return the number that has the lowest absolute difference from the input number
  
- Make adjustment to get number
- if that number is less than your current number
  - add that character to the string
  - subtract its numerical value from the number
- if that number is greater than your current number
  - add the roman value for the difference
  - add the character to the string
  - subtract its numerical value minus the difference from the number
=end
require 'pry'

class RomanNumeral
  CONVERSIONS = { 0 => '',
                  1 => 'I',
                  5 => 'V',
                  10 => 'X',
                  50 => 'L',
                  100 => 'C',
                  500 => 'D',
                  1000 => 'M' }
  
  def initialize(num)
    @number = num
  end
  
  def to_roman
    num = @number
    split_num.map do |digit|
      if CONVERSIONS.keys.include? digit
        CONVERSIONS[digit]
      else
        r_num = find_closest_num(digit)
        adjust_r_num(digit, r_num)
      end
    end.join
  end
  
  def adjust_r_num(digit, r_num)
    result_r_num = r_num
    
    loop do
      if digit > CONVERSIONS.key(r_num)
        digit = digit - CONVERSIONS.key(r_num)
        r_num = find_closest_num(digit)
        result_r_num += r_num
      elsif digit < CONVERSIONS.key(r_num)
        digit = CONVERSIONS.key(r_num) - digit
        r_num = find_closest_num(digit)
        result_r_num = r_num + result_r_num
      else
        break
      end
    end
     result_r_num
  end
  
  def split_num
    num = @number
    digits = []
    @number.to_s.size.times do |num_zeros|
      num, remainder = num.divmod(10)
      digits << (remainder.to_s + '0'*num_zeros).to_i
    end
    
    digits.reverse
  end
  
  def find_closest_num(digit)
    last_two_lower = CONVERSIONS.keys.select { |r_num| r_num <= digit }.last(2)
    
    numerical_r = if last_two_lower[1] + (last_two_lower[0] * 3) >= digit
                    CONVERSIONS[last_two_lower.last]
                  else
                    CONVERSIONS.keys.min_by { |r_num| (digit - r_num).abs }
                  end
    
    CONVERSIONS[numerical_r]
  end
end

p RomanNumeral.new(8).to_roman