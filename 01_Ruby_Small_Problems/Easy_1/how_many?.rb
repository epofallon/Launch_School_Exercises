def count_occurrences(vehicles, vehicle_hash)
  index_array = vehicles.uniq
  index_array.each{ |var| vehicle_hash[var] = vehicles.count(var) }
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

vehicle_hash = Hash.new
count_occurrences(vehicles, vehicle_hash)
vehicle_hash.each{ |vehicle, count| puts "#{vehicle} => #{count}" }