=begin
=== Understand the Problem ===
- Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.
- input: a string of numbers
- other input: an integer (length of series looking for)
  - if you ask for a series larger than the given string throw an ArgumentError

=== Examples ===
- given: "01234" & looking for 3 digit series
  - 012; 123; 234

=== Algorithm ===
- constructor
  - set instance variable to single argument
- slices
  - raise ArgumentError if input number is larger that string length
  - split string into characters
  - convert string to integers
  - initialize empty array
  - iterate through
    - collect each slice of the given length
  - return collection
=end

class Series
  def initialize(numbers)
    @numbers = numbers
  end
  
  def slices(slice_size)
    raise ArgumentError if slice_size > @numbers.size
    @numbers.chars.map(&:to_i).each_cons(slice_size).to_a
  end
end

p Series.new('01234567').slices(4)