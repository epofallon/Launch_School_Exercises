def swap_name(string)
  string.split.reverse.join(', ')
end

p swap_name("Eugene O'Fallon") == "O'Fallon, Eugene"