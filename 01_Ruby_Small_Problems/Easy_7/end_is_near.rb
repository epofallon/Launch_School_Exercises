def penultimate(string)
  string.split[-2]
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'


# Edge cases for grabbing middle word in a string
  # empty string
    # return back an empty string
  # string with only one word
    # return back the one word
  # string with an even number of words
    # return the two words that are in the middle
  # string with an odd number of words
    # return the center word