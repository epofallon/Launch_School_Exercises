# Enumerable#map
# - The returned values from a block are built into an array that is returned. 
# - Every time `#map` yields to the block it obtains 1 value.
# - Returns an Array that has the same number of elements that the original collection had.

def map(arr)
  result = []
  
  arr.each { |item| result << yield(item) }
  
  result
end

p map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
p map([]) { |value| true } == []
p map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
p map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
p map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]