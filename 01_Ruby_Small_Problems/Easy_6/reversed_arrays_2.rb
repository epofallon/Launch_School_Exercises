=begin
# PROBLEM
  - Write a method that takes an Array, and returns a new Array with the elements of the original list in reverse order. Do not modify the original list.
    You may not use Array#reverse or Array#reverse!, nor may you use the method you wrote in the previous exercise.

# TEST CASES / EXAMPLES
    reverse([1,2,3,4]) == [4,3,2,1]          # => true
    reverse(%w(a b e d c)) == %w(c d e b a)  # => true
    reverse(['abc']) == ['abc']              # => true
    reverse([]) == []                        # => true
  
    list = [1, 3, 2]                      # => [1, 3, 2]
    new_list = reverse(list)              # => [2, 3, 1]
    list.object_id != new_list.object_id  # => true
    list == [1, 3, 2]                     # => true
    new_list == [2, 3, 1]                 # => true

  # input: an array
  # output: a different array object that is the reverse of the original array
  
  # rules:
    # explicit rules:
      - you may not use Array#reverse, Array#reverse!, or the method in reversed_arrays_1.rb
      - return a new object and do not modify the old object
    # implicit rules:
      - array elements can be any objects
      - an empty array will return an empty array
      - a one element array will match, but still be a new & different object
      
# DATA STRUCTURE
  - Array
  
# ALROGIRTHM
  # define method 'reverse' that takes an array, 'arr', as an argument
    - initialize 'forwards_i' as 0
    - initialize 'backwards_i' as original array length - 1
    - initialize 'rev_arr' as an empty array
    - initialize loop
      - set 'rev_arr[forwards_i]' equal to 'arr[backwards_i]'
      - break if 'rev_arr' and 'arr' are equal length
      - add one to forwards_i
      - subtract one from backwards_i
    - return 'rev_arr'
=end

def reverse(arr)
  rev_arr = []
  return rev_arr if arr == []
  forwards_i = 0
  backwards_i = arr.length - 1
  
  loop do
    rev_arr[forwards_i] = arr[backwards_i]
    break if rev_arr.length == arr.length
    forwards_i += 1
    backwards_i -= 1
  end
  rev_arr
end

puts reverse([1,2,3,4]) == [4,3,2,1]          # => true
puts reverse(%w(a b e d c)) == %w(c d e b a)  # => true
puts reverse(['abc']) == ['abc']              # => true
puts reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
puts list.object_id != new_list.object_id  # => true
puts list == [1, 3, 2]                     # => true
puts new_list == [2, 3, 1]                 # => true