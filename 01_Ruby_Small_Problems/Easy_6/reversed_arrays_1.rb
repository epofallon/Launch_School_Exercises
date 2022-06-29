# PROBLEM
#   Write a method that takes an Arrayy as an argument, and reverses its elements
#   in place; that is, mutate the Array passed into this method.
#   The return value should be the same Array object.
#   You may not use Array#reverse or Array#reverse!

# input: an array
# output: the same array, mutated to be reversed
# rules:
#   explicit rules:
#   - you may not use .reverse or .reverse! (we want to recreate the functionality of .reverse!)
#   - the returned object is the original object, modified
#   implicit rules:
#   - elements can be any objects

# DATA STRUCTURE
#   Array

# ALGORITHM
# - define methode reverse! that takes an array as an argument.
#   - record the arrays length - 1 into reverse_iterator
#   - start front to back iterator at 0
#   - begin a loop to iterate through the array
#     - record the element at 'reverse_iterator' position in 'b_to_f' variable
#     - record the element at 'iterator' position in 'f_to_b' variable
#     - reassign element at 'iterator' position to 'b_to_f' variable
#     - reassign element at 'reverse_iterator' position to 'f_to_b' variable
#     - subtract one from 'reverse_iterator'
#     - add one to 'iterator' 
#     - break the loop when 'iterator' is greater than 'reverse_iterator'
# - return the original array

def reverse!(arr)
  return arr if arr.length == 0
  reverse_iterator = arr.length - 1
  iterator = 0
  
  loop do
    b_to_f = arr[reverse_iterator]
    f_to_b = arr[iterator]
    
    arr[iterator] = b_to_f
    arr[reverse_iterator] = f_to_b
    
    reverse_iterator -= 1
    iterator += 1
    break if iterator > reverse_iterator
  end
  arr
end

# TEST CASES / EXAMPLES



list = [1,2,3,4]
result = reverse!(list)
puts result == [4, 3, 2, 1] # true
puts list == [4, 3, 2, 1] # true
puts list.object_id == result.object_id # true

list = %w(a b e d c)
puts reverse!(list) == ["c", "d", "e", "b", "a"] # true
puts list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
puts reverse!(list) == ["abc"] # true
puts list == ["abc"] # true

list = []
puts reverse!(list) == [] # true
puts list == [] # true

