# Enumerable#max_by
# returns the element for which the block returned the largest value.

# - iterate through the array parameter
# - pass each item into the block
# - record each return in an object
# - 

def max_by(arr)
  return nil if arr.empty?
  
  largest_item = arr.first
  largest_block_return = yield(largest_item)
  
  arr[1..-1].each do |item|
    block_return = yield(item)
    
    if block_return > largest_block_return
      largest_item = item
      largest_block_return = block_return
    end
  end
  
  largest_item
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil