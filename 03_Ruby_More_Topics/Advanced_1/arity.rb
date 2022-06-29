# Group 1
my_proc = proc { |thing| puts "This is a #{thing}." }
puts my_proc # a proc object was created
puts my_proc.class  # The class is Proc
my_proc.call # calls the closure defined in the proc & the parameter is set to `nil` since nothing was passed in through `#call` --> loose arity
my_proc.call('cat') # calls the closure defined in the proc & the parameter is set to `'cat'` since that string was passed into `#call`
puts ''

# Group 2
my_lambda = lambda { |thing| puts "This is a #{thing}." } 
my_second_lambda = -> (thing) { puts "This is a #{thing}." } # different way to define a lambda
puts my_lambda # outputs the proc object defined on `line 10`
puts my_second_lambda # outputs the proc object defined on `line 11`
puts my_lambda.class # The class is Proc
my_second_lambda.call('dog') # functions like the proc
# my_lambda.call # ArgumentError for not passing in an expected argument. --> strict arity
# my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." } # There is no Lambda class
puts ''

# Group 3
def block_method_1(animal) # a method that yield to a block, passes no argument to the block
  yield
end

block_method_1('seal') { |seal| puts "This is a #{seal}."} # block argument `seal` is set to `nil` because no argument is passed to the block
# block_method_1('seal') # LocalJumpError for not passing a block to a method that yields to a block
puts ''

# Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."} # This is a turtle.
block_method_2('turtle') do |turtle, seal| # This is a turetle an a .
  puts "This is a #{turtle} and a #{seal}."
end
block_method_2('turtle') { puts "This is a #{animal}."} # Error undefined local variable or method `animal`
puts ''

# lambdas are a type of proc
# procs have loose arity, like blocks do
# lambdas have strict arity
# lamdas can be defined like so variable = -> (parameter) { 'some code' }