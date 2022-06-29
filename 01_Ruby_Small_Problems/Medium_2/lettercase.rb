# Understand the Problem
=begin
  - input: string
  - output: a hash
    - percent characters that are lowercase
    - percent characters that are uppercase
    - percent characters that are neither
  - explicit rules:
    - string will always have at least one character
  - implicit rules:
    - divides count of each character type by total number of characters
    - includes spaces as a character
    - numbers can be floats, not just integers
    - will always total to 100 %
=end

# Examples / Test Cases
=begin
  letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
  letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
  letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }
=end

# Data Structure
=begin
  - keep string as a string
  - return a hash
  - floats for the numbers
=end

# Algorithm
=begin
  - set 'num_chars' to the string length
  - set filters to [('a'..'z').join, ('A'..'Z').join]
  - count lowercase characters
  - divide by num_chars to get percentage
  - count uppercase characters
  - divide by num_chars to get percentage
  - calculate neither characters
  - divide by num_chars to get percentage
=end
require 'pry'
def letter_percentages(string)
  num_chars = string.size.to_f
  characters = string.chars
  percent_hsh = {}
  percent_hsh[:lowercase] = characters.count { |char| char =~ /[a-z]/ } / num_chars * 100
  percent_hsh[:uppercase] = characters.count { |char| char =~ /[A-Z]/ } / num_chars * 100
  percent_hsh[:neither] = characters.count { |char| char =~ /[^A-Za-z]/ } / num_chars * 100
  percent_hsh.each{ |k, percent| percent_hsh[k] = percent.round(2) }
end

p letter_percentages('abCdef 123') == { lowercase: 50, uppercase: 10, neither: 40 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25 }
p letter_percentages('123') == { lowercase: 0, uppercase: 0, neither: 100 }
p letter_percentages('abcdefGHI')