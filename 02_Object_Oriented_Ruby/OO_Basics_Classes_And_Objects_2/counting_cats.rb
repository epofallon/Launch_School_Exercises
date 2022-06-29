class Cat
  @@cat_count = 0
  
  def initialize
    @@cat_count += 1
  end
  
  def self.total
    @@cat_count
  end
end


kitty1 = Cat.new
kitty2 = Cat.new

puts Cat.total