class Hero
  
  def to_s
    "My abilities are: #{Hero::ABILITIES.join(', ')}"
  end
end

class Spiderman < Hero
  ABILITIES = %w(web jump crawl)
end

class Superman < Hero
  ABILITIES = %w(fly lasers bulletproof)
end

puts Spiderman.new
puts Superman.new