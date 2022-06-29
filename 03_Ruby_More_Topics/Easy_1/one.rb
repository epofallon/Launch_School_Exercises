# Enumerable#one?
# - If the block returns `true` for exactly one element, then `#one?` returns `true`.
# - Otherwise returns false
# - `#one?` stops searching the collection the second time the block returns true.

def one?(arr)
  count = 0
  
  arr.each do |item|
    puts "=> #{item}"
    count += 1 if yield(item)
    break if count == 2
  end
  
  count == 1
end

# p one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
# p one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
p one?([2, 3, 4, 5, 6, 8]) { |value| value.even? }    # -> false
# p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
# p one?([1, 3, 5, 7]) { |value| true }           # -> false
# p one?([1, 3, 5, 7]) { |value| false }          # -> false
# p one?([]) { |value| true }                     # -> false