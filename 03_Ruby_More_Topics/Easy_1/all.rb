# Enumerable#all?
# - passes each element of a collection to a block
# - if the block returns `true` for every element, then `#all?` returns `true`
# - else `#all?` returns `false`

def all?(arr)
  arr.each { |element| return false unless yield(element) == true }
  true
end

p all?([1, 3, 5, 6]) { |value| value.odd? } == false
p all?([1, 3, 5, 7]) { |value| value.odd? } == true
p all?([2, 4, 6, 8]) { |value| value.even? } == true
p all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p all?([1, 3, 5, 7]) { |value| true } == true
p all?([1, 3, 5, 7]) { |value| false } == false
p all?([]) { |value| false } == true