# PROBLEM
#   Write a method that takes an array of strings, and returns an array
#   of the same string values, except with the vowels (a, e, i, o, u) removed.

# TEST CASES
#   remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
#   remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
#   remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# return a different array

# input: an array of strings
# output: a different array of strings with no vowels

# Explicit Rules:
# - Remove vowels from strings
# Implicit Rules:
# - Remove both upper and lower case vowels
# - Return empty string if all chars are vowels

# DATA STRUCTURE
# - An array of strings

# ALGORITHM
# - initialize a CONSTANT array containing all vowels
# - initialize a result variable as an empty array
# - loop through the words in the given array
#   - for each string delete vowels
#   - append modified string into result array
# - return the result array

VOWELS = 'AEIOUaeiou'

def remove_vowels(arr)

  arr.map do |string|
    string.delete(VOWELS)
  end

end

puts remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
puts remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
puts remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']