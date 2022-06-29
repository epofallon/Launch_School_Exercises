require 'pry'

DIGITS = {  '0' => 0,
            '1' => 1,
            '2' => 2,
            '3' => 3,
            '4' => 4,
            '5' => 5,
            '6' => 6,
            '7' => 7,
            '8' => 8,
            '9' => 9,
}

HEX = DIGITS.merge ( {'A' => 10,
                      'B' => 11,
                      'C' => 12,
                      'D' => 13,
                      'E' => 14,
                      'F' => 15
} )

def string_to_signed_integer(string)
  number = 0
  operator = ''
  num_array = string.chars.each do |num|
    if %w(- +).include? num
      operator = num
    else
      number = 10 * number + switch(num)
    end
  end
  operator == '-' ? -number : number
end

def switch(num)
  DIGITS[num]
end

puts string_to_signed_integer('4321') == 4321
puts string_to_signed_integer('-570') == -570
puts string_to_signed_integer('+100') == 100