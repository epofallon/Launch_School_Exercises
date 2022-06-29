# Understand the Problem
=begin
  GOAL: Sort an array of passed values using merge sort.
  - explicit rules:
    - the array will onlyy contain one type of data
    - data may be either all numbers or strings
    
  - Merge Sort
    - a recursive sorting algorithm that works by breaking down the array elements into nested sub_arrays, then recombining those nested sub_arrays in sorted order.
    
    [     9   ,   5     ,     7   ,   1     ]
    [ [   9   ,   5   ] , [   7   ,   1   ] ]
    [ [ [ 9 ] , [ 5 ] ] , [ [ 7 ] , [ 1 ] ] ]
    
    [ [ [ 9 ] , [ 5 ] ] , [ [ 7 ] , [ 1 ] ] ]
    [ [   5   ,   9   ] , [   1   ,   7   ] ]
    [     1   ,   5     ,     7   ,   9     ]
    
  Recursive methods have three primary qualities:
  1. They call themselves at least once.
  2. They have a condition that stops the recursion.
  3. They use the result returned by themselves.
=end

def merge_sort(arr)
  return arr if arr.size == 1
  
  arr_1 = arr[0...(arr.size / 2)]
  arr_2 = arr[(arr.size / 2)...arr.size]
  
  arr_1 = merge_sort(arr_1)
  arr_2 = merge_sort(arr_2)
  
  merge(arr_1, arr_2)
end

def merge(arr_1, arr_2)
  result = []
  i2 = 0
  
  arr_1.each do |value|
    while i2 < arr_2.size && arr_2[i2] <= value
      result << arr_2[i2]
      i2 += 1
    end
    
    result << value
  end
  
  result.concat(arr_2[i2..-1]) 
end
require 'pry'
def merge_sort_iterative(array)
  binding.pry
  array = array.map { |n| [n] }
  while array[1]
    array = array.each_slice(2).map do |sub1, sub2|
      sub1 ||= []
      sub2 ||= []
      merge(sub1, sub2)
    end
  end
  array.flatten
end

p merge_sort_iterative([9, 5, 7, 1]) == [1, 5, 7, 9]
# merge_sort([5, 3]) == [3, 5]
# merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
# merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
# merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]