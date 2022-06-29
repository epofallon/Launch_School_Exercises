# Understand the problem
=begin
  Write a method that rotates an array by moving the first element to the end
  of the array. The origianl array should not be modified.
=end

def rotate_array(array)
  array[1..-1] + [array[0]]
end

def rotate_string(string)
  rotate_array(string.chars).join
end

def rotate_integer(integer)
  rotate_string(integer.to_s)
end
p rotate_integer(123456789)