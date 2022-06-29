=begin
=== Understand the Problem ===
- inputs: A natrual number, a set of one or more other numbers
  (default to 3 & 5) if a set of numbers isn't given

- find the sum of allthe multiples of the numbers in the set that are less than
  the first number.

=== Examples ===
- given 20 (not including)
- given 3, 5
- 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78

=== Data Structure ===
- Dealing with numbers. An array to handle the input number set works well.

=== Algorithm ===
- constructor
  - initialized with a set of numbers varying in size. The default being 3 & 5

- #to instance method
  - iterate from 1 to the passed in number
    - if the current number is a multiple of any of the numbers from the set
      - increment the sum
    - else just the sum
=end

class SumOfMultiples
  attr_reader :num_set

  def initialize(*args)
    @num_set = args.empty? ? [3, 5] : args
  end

  def to(num)
    (1...num).reduce(0) do |sum, multiple|
      multiple?(multiple) ? sum + multiple : sum
    end
  end

  def multiple?(multiple)
    @num_set.any? { |n| multiple % n == 0 }
  end

  def self.to(num)
    new.to(num)
  end
end
