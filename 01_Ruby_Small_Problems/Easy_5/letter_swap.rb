# given a string
# split string into an array of words
# for each word do
  # save the first letter
  # overwrite first letter with the last letter
  # overwrite last letter with the first letter
# join back into a string
def swap_first_last_characters(a, b)
  a, b = b, a
end
  
def swap(string)
  string = string.split.map do |word|
    swap_first_last_characters(word[0], word[-1])
  end
  string.join(' ')
end

p swap('Oh what a wonderful day it is').inspe# == 'hO thaw a londerfuw yad ti si'
puts swap('Abcde') == 'ebcdA'
puts swap('a') == 'a'