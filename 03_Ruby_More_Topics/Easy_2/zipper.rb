# Array#zip
# - Takes two arrays
# - combines them into a single array in which each element is a two-element array
#   - The first element is a value from one array
#   - The second element is a value form the second array

def zip(arr1, arr2)
  arr1.map.with_index { |item, idx| [item, arr2[idx]] }
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]