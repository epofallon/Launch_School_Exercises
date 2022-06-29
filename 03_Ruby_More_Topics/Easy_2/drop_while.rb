# Enumerable#drop_while
# - iterates until it finds an element for whch the block return `false` or `nil`.
# - Then converts the remaining elements of the collection (including the falsey one)
#   to an array and returns that array
# If the array is empty, or if the block returns a truthy value for every element, `drop_while`
# should return an empty array.

def drop_while(arr)
  idx = 0
  
  while idx < arr.size && yield(arr[idx])
    idx += 1
  end
  
  arr[idx..-1]
end

p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []