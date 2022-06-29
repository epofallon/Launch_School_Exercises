def multisum(num)
  num_arr = []
  (1..num).each do |num|
    if num % 3 == 0 || num % 5 == 0
      num_arr << num
    end
  end
  num_arr.sum
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168