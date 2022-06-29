require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def test_accept_money
    cash_register = CashRegister.new(100)
    transaction = Transaction.new(20)
    transaction.amount_paid = 20
    cash_register.accept_money(transaction)
    
    assert_equal(120, cash_register.total_money)
  end
  
  def test_change
    cash_register = CashRegister.new(100)
    transaction = Transaction.new(20)
    transaction.amount_paid = 30
    
    assert_equal(10, cash_register.change(transaction))
  end
  
  def test_give_receipt
    item_cost = 20
    cash_register = CashRegister.new(100)
    transaction = Transaction.new(item_cost)
    
    assert_output("You've paid $#{item_cost}.\n") { cash_register.give_receipt(transaction) }
  end
end