# UNDERSTAND THE PROBLEM
=begin
  - input: two arguments
    - the first is an array
    - the second is a hash
=end


def greetings(name_array, info_hash)
  full_name = name_array.join(' ')
  title = info_hash[:title]
  occupation = info_hash[:occupation]
  "Hello, #{full_name}! Nice to have a #{title} #{occupation} around."
end

puts greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })