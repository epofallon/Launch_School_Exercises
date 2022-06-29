require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'transaction'

class TestTransaction < Minitest::Test
  def test_prompt_for_payment
    transaction = Transaction.new(20)
    input = StringIO.new("30/n")
    output = StringIO.new
    transaction.prompt_for_payment(input: input, output: output)
    
    assert_equal(30, transaction.amount_paid)
  end
end