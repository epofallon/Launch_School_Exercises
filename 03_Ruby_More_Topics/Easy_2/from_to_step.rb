# Range#step
# - lets you iterate over a range of values where each value in the iteration is the previous value plus a 'step' value.

def step(first_num, last_num, step_num)
  loop do
    yield first_num
    break if first_num + step_num > last_num
    first_num += step_num
  end
  first_num
end

p step(1, 11, 3) { |value| puts "value = #{value}" }