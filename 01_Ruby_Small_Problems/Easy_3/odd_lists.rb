def oddities(arr)
  odds_arr = []
  arr.each_index{ |i| odds_arr << arr[i] if i.even? }
  odds_arr
end

def even_stevens(arr)
  arr.select{ |x, i| x if i.odd? }
end

puts oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
puts oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
puts oddities(['abc', 'def']) == ['abc']
puts oddities([123]) == [123]
puts oddities([]) == []
puts ''
puts even_stevens([2, 3, 4, 5, 6]) #== [3, 5]
puts even_stevens([1, 2, 3, 4, 5, 6]) == [2, 4, 6]
puts even_stevens(['abc', 'def']) == ['def']
puts even_stevens([123]) == []
puts even_stevens([]) == []