class Transform
  attr_accessor :str
  
  def initialize(str)
    @str = str
  end
  
  def uppercase
    str.upcase
  end
  
  def self.lowercase(string)
    string.downcase
  end
end

my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')

# ABC
# xyz