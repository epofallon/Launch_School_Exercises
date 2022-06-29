=begin
  Commands:
  - n => place a value in the register
  - PUSH => push the register value on to the stack & leave value in the register
  - ADD => pops a value from the stack and adds it to the register value, sotring the result in the register
  - SUB => pops a value from the stack and subtracts if from the register value, sotring the result in the register
  - MULT => pops a value from the stack and multiplies it by the register value, sotring the result in the register
  - DIV => pops a value from the stack and divides it into the register value, storing the integer result in the register
  - MOD => pops a value from the stack and divides it into the register value, storing the integer remainder of the division in the register
  - POP => reomve the topmost item from the stack and place in register
  - PRINT => print the register value
  
  - produce an error if an unexptected item is present in the string ==> "Invalid token: #{token}"
  - produce an error if a required stack value is not on the stack when it should be (the stack is empty) ==> "Empty Stack!"
  - in all error cases no further processing should be performed
  
  - initialize the register to 0
=end
module Stackable
  def empty_stack?
    raise EmptyStack.new("Empty Stack!") if stack.empty?
  end
  
  def assign_register(num)
    self.register = num.to_i
  end
  
  def push
    stack << register
  end
  
  def add
    empty_stack?
    self.register += stack.pop
  end
  
  def subtract
    empty_stack?
    self.register -= stack.pop
  end
  
  def multiply
    empty_stack?
    self.register *= stack.pop
  end
  
  def divide
    empty_stack?
    self.register /= stack.pop
  end
  
  def modulo
    empty_stack?
    self.register %= stack.pop
  end
  
  def pop_to_register
    empty_stack?
    self.register = stack.pop
  end
  
  def print_register
    puts register
  end
  
  def int?(str)
    str if str.to_i.to_s == str
  end
end

class Minilang
  include Stackable
  
  attr_accessor :register, :stack
  
  def initialize(tokens)
    @tokens = tokens.split
    @register = 0
    @stack = []
  end
  
  def eval
    @tokens.each do |token|
      case token.upcase
      when int?(token) then assign_register(token)
      when 'PUSH'   then push
      when 'ADD'    then add
      when 'SUB'    then subtract
      when 'MULT'   then multiply
      when 'DIV'    then divide
      when 'MOD'    then modulo
      when 'POP'    then pop_to_register
      when 'PRINT'  then print_register
      else raise InvalidToken.new("Invalid token: #{token}")
      end
    end
  end
end


class EmptyStack < StandardError; end

class InvalidToken < StandardError; end

Minilang.new('PRINT').eval
# 0

Minilang.new('5 PUSH 3 MULT PRINT').eval
# 15

Minilang.new('5 PRINT PUSH 3 PRINT ADD PRINT').eval
# 5
# 3
# 8

Minilang.new('5 PUSH 10 PRINT POP PRINT').eval
# 10
# 5

# Minilang.new('5 PUSH POP POP PRINT').eval
# Empty stack!

Minilang.new('3 PUSH PUSH 7 DIV MULT PRINT ').eval
# 6

Minilang.new('4 PUSH PUSH 7 MOD MULT PRINT ').eval
# 12

Minilang.new('-3 PUSH 5 XSUB PRINT').eval
# Invalid token: XSUB

Minilang.new('-3 PUSH 5 SUB PRINT').eval
# 8

Minilang.new('6 PUSH').eval
# (nothing printed; no PRINT commands)