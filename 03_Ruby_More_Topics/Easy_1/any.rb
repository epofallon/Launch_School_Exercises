# Enumerable#any?
# - if the block returns `true` for any element, then `#any?` returns true, otherwise returns `false`. 
# - will stop searching the first time the block returns `true`

# algorithm
# - iterate from 0 to the last index of the array
# - yield to the block and pass in the element at the current index
# - if the return value is `true`, return `true`
# - if out of the block return `false`

def any?(arr)
  idx = 0
  
  while idx < arr.size
    return true if yield(arr[idx]) == true
    idx += 1
  end
  
  false
end



p any?([1, 3, 5, 6]) { |value| value.even? } == true
p any?([1, 3, 5, 7]) { |value| value.even? } == false
p any?([2, 4, 6, 8]) { |value| value.odd? } == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| true } == true
p any?([1, 3, 5, 7]) { |value| false } == false
p any?([]) { |value| true } == false