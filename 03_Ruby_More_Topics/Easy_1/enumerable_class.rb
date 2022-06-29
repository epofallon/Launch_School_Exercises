def compute
  if block_given?
    yield
  else
    'Does not compute.'
  end
end

p compute { 5 + 3 }
p compute { 'a' + 'b' }
p compute == 'Does not compute.'