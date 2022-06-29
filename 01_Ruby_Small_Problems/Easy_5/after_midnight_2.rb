#Given a string containing a time
#Convert string time to integers
#Convert hours to minutes
#For after_midnight, add minutes together to get the delta after midnight
#Ensure number of minutes is in appropiate range of 0..1439
MINS_IN_DAY = 1440

def after_midnight(string)
  time_arr = string.split ':'
  minutes = time_arr[0].to_i * 60 + time_arr[1].to_i
  minutes % MINS_IN_DAY
end

def before_midnight(string)
  minutes = MINS_IN_DAY - after_midnight(string)
  minutes = 0 if minutes == MINS_IN_DAY
  minutes
end

puts after_midnight('00:00') #== 0
puts before_midnight('00:00') #== 0
puts after_midnight('12:34') #== 754
puts before_midnight('12:34') #== 686
puts after_midnight('24:00') #== 0
puts before_midnight('24:00') #== 0