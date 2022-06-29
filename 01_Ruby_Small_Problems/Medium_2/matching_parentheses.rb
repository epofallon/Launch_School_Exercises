# Understand the Problem
=begin
  - input: a string argument
  - output: true/false
    - true if all parentheses in the string are properly balanced
    - false otherwise
  - explicit rules:
    - properly balanced parentheses occur in matching '(' ')' pairs
    - a balanced pair can only start with a '(' and not a ')'
=end

# Test Cases / Examples
=begin
  balanced?('What (is) this?') == true
  balanced?('What is) this?') == false
  balanced?('What (is this?') == false
  balanced?('((What) (is this))?') == true
  balanced?('((What)) (is this))?') == false
  balanced?('Hey!') == true
  balanced?(')Hey!(') == false
  balanced?('What ((is))) up(') == false
=end

# Data Structure
  # String to an array of characters

# Algorithm
=begin
  - remove characters that aren't ( or )
  - loop to remove all instances of "()"
    - break when nil is returned
  - string length == 0 ?
=end

def balanced?(string, chars)
  parentheses_only = string.delete("^#{chars}")
  loop do
    break if parentheses_only.gsub!("#{chars}", '') == nil
  end
  parentheses_only.size.zero?
end

def totally_balanced?(string)
  %w(() '' "" [] {}).all?{ |chars| balanced?(string, chars) }
end
  

p totally_balanced?('{What}{} [](is) this?') == true
p totally_balanced?('What ""is this?') == true
p totally_balanced?('What (is this?') == false
p totally_balanced?('((What) (is this))?') == true
p totally_balanced?('((What)) (is this))?') == false
p totally_balanced?('Hey!') == true
p totally_balanced?(')Hey!(') == false
p totally_balanced?('What ((is))) up(') == false