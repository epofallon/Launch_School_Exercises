# Understand the Problem
=begin
  - Write a method that returns the number of Friday the 13ths in the year given by an argument
  - Assume the year is greater than 1752 (when the UK adopted the modern Gregorian Calendar)
  - Assume this calendar will remain for the forseeable future
  
  - input:
    - an integer representing a year
  - output:
    - an integer representing the number of Friday the 13ths in the given year
=end

# Examples / Test Cases
=begin
  
  friday_13th(2015) == 3
  friday_13th(1986) == 1
  friday_13th(2019) == 2
  
=end

# Data Strucutre
  # num_f_13s to count friday the 13ths
  
# Algorithm
=begin
  - num_f_13s = 0
  - for each month
    - check if the 13th is a friday
      - add 1 to num_f13s if true
  - return num_f13s
=end

require 'date'
require 'pry'

def friday_13th(year)
  num_f13s = 0
  1.upto(12) do |month|
    #binding.pry
    num_f13s += 1 if Date.new(year, month, 13).friday?
  end
  num_f13s
end

def five_fridays(year)
  months = Hash.new(0)
  first_day = Date.new(year,1,1)
  last_day = Date.new(year,12,31)
  
  (first_day..last_day).each do |date|
    months[date.month] += 1 if date.friday?
  end
  
  months.values.count(5)
end

p five_fridays(2021) == 5
p five_fridays(2022) == 4
p five_fridays(2026) == 4
p five_fridays(2027) == 5