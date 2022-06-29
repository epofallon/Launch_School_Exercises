# PROBLEM
#   Write a method that takes a floating point number that represenets an angle between 0 and 360 degrees
#   and returns a String that represents that angle in degrees, minutes and seconds. You should use 
#   a degree symbol (°) to represent degrees, a single quote (') to represent minutes, and a double quote
#   (") to represent seconds. A degree has 60 minutes, while a minute has 60 seconds.

# TEST CASES
#   dms(30) == %(30°00'00")
#   dms(76.73) == %(76°43'48")
#   dms(254.6) == %(254°36'00")
#   dms(93.034773) == %(93°02'05")
#   dms(0) == %(0°00'00")
#   dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# UNDERSTAND THE PROBLEM
#   input: floating point number
#   output: string representing angle in degrees, minutes and seconds
#   rules:
#     explicit rules:
#     - floating point number convereted to degrees, minutes and seconds
#     - mintues and seconds should always be formatted with two digits
#     implicit rules:
#     - non whole degrees are converted to mintues
#     - non whole minutes are converted to seconds
#     - round seconds based on remainder

# DATA STRUCTURE
# - Start is float number
# - Varaibles 'degrees', 'minutes', and 'seconds'
# - Convert to string output

# ALGORITHM
# - given floating number input
# - creat varaibles named 'degrees' & 'remainder'
# - assign 'degrees' to the whole number of the input and save the remainder to 'remainder'
# - multiply remainder by 60
# - assign 'minutes' to the whole number of remainder and reassign the remainder to 'remainder'
# - multiply remainder by 60
# - assign 'seconds' to the rounded number of 'remainder'
# - concatenate 'degrees', 'minutes', and 'seconds', into a string name 'result' with proper formatting
# - return 'result' string

DEGREE = "\xC2\xB0"

def dms(float)
  
  float = convert(float) unless (0..360).include? float.round(0)
  
  degrees, remainder = degrees(float)
  minutes, remainder = minutes(remainder)
  seconds = seconds(remainder)

  "%(#{degrees}#{DEGREE}#{"%02d" % minutes}'#{"%02d" % seconds}\")"
end

def convert(float)
  float % 360
end

def degrees(float)
  degrees, remainder = float.divmod(1)
end

def minutes(float)
  float = float.round(5) * 60
  minutes, remainder = float.divmod(1)
end

def seconds(float)
  seconds = float * 60
  seconds.round(0)
end

puts dms(30)
puts dms(76.73)
puts dms(254.6)
puts dms(93.034773)
puts dms(0)
puts dms(360)
puts dms(400)
puts dms(-40)
puts dms(-420.57)