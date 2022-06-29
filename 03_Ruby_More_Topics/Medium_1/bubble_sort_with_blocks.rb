# modify `bubble_sort!` so it takes an optional block that determines which of the 
# two consecutive elements will appear first in the results.
require 'pry'

def bubble_sort!(arr)
  final_idx = arr.length - 2
  swap = true
  
  while swap do
    swap = false
    
    0.upto(final_idx) do |idx|
      if block_given? && yield(arr[idx + 1], arr[idx])
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        swap = true
      elsif !block_given? && arr[idx] > arr[idx + 1]
        arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]
        swap = true
      end
    end
    
    final_idx -= 1
  end
end


# array = [5, 3]
# bubble_sort!(array)
# p array == [3, 5]

# array = [5, 3, 7]
# bubble_sort!(array) { |first, second| first >= second }
# p array == [7, 5, 3]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# p array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array #== [14, 22, 12, 6, 27]
            # 0   1   5  6   6

# array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array)
# p array == %w(Kim Pete Tyler alice bonnie rachel sue)

# array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
# p array == %w(alice bonnie Kim Pete rachel sue Tyler)