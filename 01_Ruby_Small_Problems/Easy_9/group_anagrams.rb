# UNDERSTAND THE PROBLEM
=begin
  - print out groups of words that are anagrams
=end

# EXAMPLES / TEST CASES
=begin
  words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
            'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
            'flow', 'neon']
            
  demo - dome - mode
  none - neon
  tied - diet - edit - tide
  evil - live - veil - vile
  fowl - wolf - flow
  
=end

# DATA STRUCTURE
=begin
  - an array
=end

# ALGORTIHM
=begin
  - 
=end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
            'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
            'flow', 'neon']
            
ledger_array = words.map{|word| word.chars.sort.join}.uniq

ledger_array.each do |ledger_word|
  anagrams_arr =  words.select do |word|
                    word.chars.sort.join == ledger_word
                  end
  p anagrams_arr
end

anagrams_hash = {}

words.each do |word|
  key = word.chars.sort.join
  if anagrams_hash.has_key?(key)
    anagrams_hash[key].push(word)
  else
    anagrams_hash[key] = [word]
  end
end

anagrams_hash.each_value { |array| p array}