# write a method that takes an array as an argument
# yield the contents of the array to the block
# should assign block variables in such a way that it ignores the first two elements
# groups all remaining elements as a `raptors` array

birds = ['crow', 'finch', 'hawk', 'eagle']

def types(birds)
  yield birds
end

types(birds) do |_, _, *raptors|
  puts "Raptors: #{raptors.join(', ')}."
end