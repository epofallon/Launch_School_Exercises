=begin
=== Understand the Problem ===
- be able to add and subtract minutes from the time represented
  by a clock object.
- two clock objects that represent the same time should be equal to each otehr.
- Cannot use any built-in date or time functionality
  - Just arithmetic operations
- military time (24 hour clock)

=== Algorithm ===
- Clock::at(hours, minutes)
  - Initialize and return a new clock object
    - call the Clock::new method and pass in the total minutes
- Clock#to_s
  - return a string 'hh:mm'
- Clock#+
  - add minutes to the clock
  - if greater than 1440, subtract 1440 until no longer greater
- Clock#-
  - subtract minutes to the clock
  - if less than 0 add 1440 until greater than 0
- Clock#==
  - check if clock's value is equal to another clock
=end

class Clock
  MAX_MINS = 1440
  MIN_MINS = 0

  def self.at(hour, minutes=0)
    new(hour * 60 + minutes)
  end

  def initialize(minutes)
    @minutes = minutes
  end

  def +(mins)
    Clock.new((@minutes + mins) % MAX_MINS)
  end

  def -(mins)
    Clock.new((@minutes - mins) % MAX_MINS)
  end

  def ==(other_clock)
    @minutes == other_clock.minutes
  end

  def to_s
    hrs, mins = @minutes.divmod(60)
    format('%02d:%02d', hrs, mins)
  end

  protected

  attr_reader :minutes
end
