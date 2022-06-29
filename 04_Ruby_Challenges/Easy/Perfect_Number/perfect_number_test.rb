require 'minitest/autorun'
require_relative 'perfect_number'

class PerfectNumberTest < Minitest::Test
  def test_initialize_perfect_number
    assert_raises StandardError do
      PerfectNumber.classify(-1)
    end
  end

  def test_classify_deficient
    assert_equal 'deficient', PerfectNumber.classify(13)
  end

  def test_classify_perfect
    assert_equal 'perfect', PerfectNumber.classify(28)
  end

  def test_classify_abundant
    assert_equal 'abundant', PerfectNumber.classify(12)
  end
end

=begin
=== Understand the Problem ===
  - A comparison between a number and the sum of its positive divisors (the numbers that can be evenly divided into the target number with no remainder, excluding the number itself).

  Write a program that can tell whether a number is perfect, abundant or deficient

  - must raise a `StandardError` if the input number isn't a natural number
  - returns the strings 'deficient', 'perfect' or 'abundant'
=== Examples / Test Cases ===
  - 15 --> 1, 3, 5 = 9 (deficient)
  -  6 --> 1, 2, 3 = 6 (perfect)
  - 28 --> 1, 2, 4, 7, 14 = 28 (perfect)
  - 24 --> 1, 2, 3, 4, 6, 8, 12 = 36 (abundant)
  - prime numbers are always deficient since their only divisor is 1

=== Data Structure ===

=== Algorithm ===
- CLASS METHOD: classify
  - raise error if invalid input
  - get all positive divisors for the input number
  - sum the positive divisors
  - return `deficient` if sum is less than input number
  - return `perfect` if sum is equal to the input number
  - return `abundant` if sum is equal to the input number

=end