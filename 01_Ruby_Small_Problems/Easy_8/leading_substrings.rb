# UNDERSTAND THE PROBLEM
=begin
  - input: a string
  - output: an array of strings 
    - this array is a list of all the substrings of a string that start at the beginning of the original string
=end

# TEST CASES
=begin
  leading_substrings('abc') == ['a', 'ab', 'abc']
  leading_substrings('a') == ['a']
  leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
=end

def leading_substrings(string)
  sum_arr = []
  sub_string = ''
  string.each_char do |char|
    sub_string = sub_string + char
    sum_arr << sub_string
  end
  sum_arr
end

p leading_substrings('abc') #== ['a', 'ab', 'abc']
p leading_substrings('a') #== ['a']
p leading_substrings('xyzzy') #== ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']