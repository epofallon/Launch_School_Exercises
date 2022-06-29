# given a string
# split the string into an array
# if a character is not a duplicate, add it into a new string
# returns a new string with all consecutive duplicate characters collapsed into a single character

def crunch(ssttrriinngg)
  string = []
  ssttrriinngg.each_char { |char| string << char unless char == string.last }
  string.join
end

puts crunch('ddaaiillyy ddoouubbllee') == 'daily double'
puts crunch('4444abcabccba') == '4abcabcba'
puts crunch('ggggggggggggggg') == 'g'
puts crunch('a') == 'a'
puts crunch('') == ''