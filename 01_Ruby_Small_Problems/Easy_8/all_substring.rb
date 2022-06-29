# UNDERSTAND THE PROBLEM
=begin
  - input: a string
  - output: an array of strings
    - strings are all substrings of the inputted string
  
  - strings are ordered by where in the string the substring begins
    - the substrings that start at the same position are ordered shortest to longest
  
  'abcde' => [a,   ab,  abc, abcd, abcde, b,   bc,  bcd, bcde, c,   cd,  cde, d,   de,  e]
             [0-0, 0-1, 0-2, 0-3,  0-4,   1-1, 1-2, 1-3, 1-4,  2-2, 2-3, 2-4, 3-3, 3-4, 4-4]
             
  - explicit requirements:
    - substrings ordered by where in the string the substring begins
    - substrings that start at the same position are ordered shortest to longest
  - implicit requirements:
    - string is iterated for each starting point, then iterated again to create substrings
=end

# EXAMPLES / TEST CASES
=begin
  substrings('abcde') == [
    'a', 'ab', 'abc', 'abcd', 'abcde',
    'b', 'bc', 'bcd', 'bcde',
    'c', 'cd', 'cde',
    'd', 'de',
    'e'
  ]
=end

# DATA STRUCTURE
=begin
  - start with a string
  - iterate through string and push returns into an array
  - end with an array of strings
=end

# ALGORITHM
=begin
  - initiate 'subsrtings_arr' as an empty array
  - iterate through the strings index ( 0 up to string size - 1) to get the starting position.
    - slice string at starting position through the end of the string
      - iterate though this string
        - add each substring into the array
  - return 'substrings_arr'
=end

# CODE WITH INTENT
def substrings(string)
  substrings_arr = []
  0.upto(string.size - 1) do |start_num|
    substring = string.slice(start_num..-1)
    substrings_arr.concat(leading_substrings(substring))
  end
  substrings_arr
end

def leading_substrings(string)
  sum_arr = []
  sub_string = ''
  string.each_char do |char|
    sub_string = sub_string + char
    sum_arr << sub_string
  end
  sum_arr
end

p substrings('abcde')
