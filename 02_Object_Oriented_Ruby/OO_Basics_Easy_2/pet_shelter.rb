class Pet
  attr_reader :type, :name
  @@unadopted_pets = []
  
  def initialize(type, name)
    @type = type
    @name = name
    @@unadopted_pets << self
  end
  
  def to_s
    "a #{type} named #{name}"
  end
  
  def self.unadopted_pets
    @@unadopted_pets
  end
end

class Owner
  attr_reader :name
  attr_accessor :pets
  
  def initialize(name)
    @name = name
    @pets = []
  end
  
  def number_of_pets
    pets.size
  end
  
  def add_pet(pet)
    pets << pet
    Pet.unadopted_pets.delete(pet)
  end
  
  def print_pets
    puts pets
  end
end

class Shelter
  def initialize
    @adoptions = {}
  end
  
  def adopt(owner, pet)
    if adoptions[owner].nil?
      adoptions[owner] = [pet]
    else
      adoptions[owner] << pet
    end
    owner.add_pet(pet)
  end
  
  def print_adoptions
    adoptions.keys.each do |owner|
      puts "#{owner.name} has adopted the following pets:"
      owner.print_pets
      puts ''
    end
  end
  
  def print_available
    puts "The Animal Shelter has the following unadopted pets:"
    puts Pet.unadopted_pets
    puts ''
  end
  
  private
  
  attr_accessor :adoptions
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

asta         = Pet.new('dog', 'Asta')
laddie       = Pet.new('dog', 'Laddie')
fluffy       = Pet.new('cat', 'Fluffy')
kat          = Pet.new('cat', 'Kat')
ben          = Pet.new('cat', 'Ben')
chatterbox   = Pet.new('parakeet', 'Chatterbox')
bluebell     = Pet.new('parakeet', 'Bluebell')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)

shelter.print_available
shelter.print_adoptions

puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."
puts "The Animal shelter has #{Pet.unadopted_pets.size} unadopted pets."

# P Hanson has adopted the following pets:
# a cat named Butterscotch
# a cat named Pudding
# a bearded dragon named Darwin

# B Holmes has adopted the following pets:
# a dog named Molly
# a parakeet named Sweetie Pie
# a dog named Kennedy
# a fish named Chester

# P Hanson has 3 adopted pets.
# B Holmes has 4 adopted pets.
# =================================
# Suppose the shelter has a number of not-yet-adopted pets, and wants to manage
# them through this same system. Thus, you should be able to add the following
# output to the example output shown above:

# The Animal Shelter has the following unadopted pets:
# a dog named Asta
# a dog named Laddie
# a cat named Fluffy
# a cat named Kat
# a cat named Ben
# a parakeet named Chatterbox
# a parakeet named Bluebell
#   ...


# when a new pet is initialized, add it to an unadopted list
# when a pet is adopted, remove it from the unadopted list


# P Hanson has 3 adopted pets.
# B Holmes has 4 adopted pets.
# The Animal shelter has 7 unadopted pets.