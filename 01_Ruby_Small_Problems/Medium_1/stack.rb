# Understand the Problem
=begin
  - A stack in Ruby can be an array that just uses the #push and #pop methods.
  - the register is not part of the stack
  - Operations that require two values will
    - #pop the topmost item from the stack
    - perform the operation using the popped value and the register value
    - store the result back in the register
=end
require 'pry'
def minilang(string)
  register = 0
  stack = []
  
  
  
  string.split(' ').each do |command|
    if %w(ADD SUB MULT DIV MOD POP).include?(command) && stack.empty?
      return "ERROR: cannot perfrom #{command} on empty stack"
    end
    
    unless %w(ADD SUB MULT DIV MOD POP PUSH PRINT).include?(command) ||
           command == command.to_i.to_s
       return "ERROR: '#{command}' is not a valid command"
     end
    
    #binding.pry
    case command
    when 'PUSH'  then stack << register
    when 'ADD'   then register += stack.pop
    when 'SUB'   then register -= stack.pop
    when 'MULT'  then register *= stack.pop
    when 'DIV'   then register /= stack.pop
    when 'MOD'   then register %= stack.pop
    when 'POP'   then register = stack.pop
    when 'PRINT' then puts register
    else register = command.to_i
    end
  end
end

p minilang('3 PUSH 5 MOD PUSH 7 PUSH 4 PUSH 5 MULT PUSH 3 ADD SUB DIV PRINT')
p minilang('3 PUSH 5 POP MOD')
p minilang ('3PUSH 5')