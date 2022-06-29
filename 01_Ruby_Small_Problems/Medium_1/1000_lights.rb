# Understand the Problem
=begin
  - switeches numbered 1 to 'n'.
  - all ligths are initially off.
  - you toggle the switches with number divisible by the count as you go from 1 to 'n'
  
  - input: integer 'n' for the total number of switches
  - output: array that identifies which lights are on after 'n' repitions
  
  - explicit rules:
    - switches are initialized as 'off'
    - n is number of switches and number of repitions
  - implicit rules:
    - we retain which switches are on and off from the previous iterations
=end

# Examples / Test Cases
=begin
  n = 5 lights
    1: every light is turned on
    2: lights 2 & 4 are turned off; 1,3, & are on
    3: lights 2,3 & 4 are turned off; 1 & 5 are on
    4: lights 2 & 3 are turned off; 1, 4 & 5 are one
    5: ligths 2, 3 & 5 are turned off; 1, 4 are one
  return is [1, 4]
=end

# Data Strucutre
=begin
  - input an integer for the # of lights
  - iterate through a hash of 'on' and 'off' values
  - return array of the keys with value 'on'
=end

# Algorithm
=begin
  - initialize hash of 'off' of with keys 1..n
  - iterate from 1 to 'n' 
    - iterate through the hash
      - if key is divisible by current iteration 'n' toggle value
      - else do nothing
  - return array of keys still 'on'
=end
def initialize_lights(num_lights)
  lights_arr = []
  0.upto(num_lights - 1) { lights_arr << 'off' }
  lights_arr
end

def toggle_on_off(lights, num)
  lights.each_with_index do |status, position|
    if (position + 1) % num == 0
      lights[position] =  (status == 'off') ? 'on' : 'off'
    end
  end
end

def on_lights(lights)
  on_lights = []
  lights.each_with_index { |status, position| (on_lights << (position + 1)) if status == 'on'}
  on_lights
end

def toggle_lights(num_lights)
  lights = initialize_lights(num_lights)
  
  1.upto(num_lights) do |num|
    toggle_on_off(lights, num)
  end
  
  on_lights(lights)
end


p toggle_lights(1000) == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961]