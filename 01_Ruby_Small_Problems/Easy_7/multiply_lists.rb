def multiply_list(arr_1, arr_2)
  arr_1.map.with_index{ |num, index| num * arr_2[index] }
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]