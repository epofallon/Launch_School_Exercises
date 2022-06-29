def buy_fruit(array)
  new_array = []
  array.each do |fruit, quantity|
    quantity.times{ new_array << fruit }
  end
  new_array
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]