# Take in a positive or negative integer

WEEKDAYS = %w(Sunday Monday Tuesday Wednesday Thursday Friday Saturday)
#puts days[1]
#puts days[-8]



def time_of_day(num)
  hours, minutes = num.divmod(60)
  days, hours = hours.divmod(24)
  WEEKDAYS[days] + ' ' + format("%02d:%02d", hours, minutes)
end

puts time_of_day(0) #== "00:00"
puts time_of_day(-3) #== "23:57"
puts time_of_day(35) #== "00:35"
puts time_of_day(-1437) #== "00:03"
puts time_of_day(3000) #== "02:00"
puts time_of_day(800) #== "13:20"
puts time_of_day(-4231) #== "01:29"