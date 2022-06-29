# UNDERSTAND THE PROBLEM
=begin
  - input: a string
  - output: an array of strings
    - strings are substrings that are palindromes
=end

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

def palindromes(string)
  palin_arr = []
  substrings(string).each do |substring|
    palin_arr << substring if is_palindrome?(substring)
  end
  palin_arr
end

def is_palindrome?(string)
  (string == string.reverse) && (string.length >= 2)
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]