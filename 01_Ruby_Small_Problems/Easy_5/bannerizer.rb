# receive a sting
# print a horizontal line
  # line is the length of the string + a space on each side + a '+' character for each corner
# print a vertical segment with space
# print a vertical segment with text
# print a vertical segment with space
# print a horizontal line
# prints the string in a box

def print_in_box(string)
  length = string.length + 2
  if length > 80
    puts 'String is too long for standard terminal'
    return
  end
  horizontal_line = "+#{'-'*length}+"
  empty_line = "|#{' '*length}|"
  
  puts horizontal_line
  puts empty_line
  puts "| #{string} |"
  puts empty_line
  puts horizontal_line
end


print_in_box("Hello my name is Eugene O'Fallon! I am here to help. I am from the government ")
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+