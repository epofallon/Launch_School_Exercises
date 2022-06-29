class Vehicle
  attr_reader :make, :model, :wheels

  def initialize(make, model, wheels)
    @make = make
    @model = model
    @wheels = wheels
  end
  
  def to_s
    "#{make} #{model}"
  end
end

class Car < Vehicle
end

class Motorcycle < Vehicle
end

class Truck < Vehicle
  attr_reader :payload

  def initialize(make, model, wheels, payload)
    super(make, model, wheels)
    @payload = payload
  end
end