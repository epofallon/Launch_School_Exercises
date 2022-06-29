=begin
=== Understand the Problem ===
- Construct objects that represent a meetup date.
- input: A month number (1-12), a year (2011).
- should be able to determine the exact date of the meeting in the
  specidied month and year
- descriptors that may be given:
  - `first`
  - `second`
  - `third`
  - `fourth`
  - `fifth`
  - `last`
  - `teenth`

- string case is not important.

=== Example ===
- If you ask for the `2nd Wednesday of May 2021`
  - The object should determine that the meetup for that month will occur on
    the 12th of May, 2021

=== Data Structure ===
- a Date object to manage our meeting day

=== Algorithm ===
- Meetup#new
  - takes a year integer, and a month integer

- Meetup#day
  - takes a `day` and descriptor string
  - returns a `Date` object or `nil` if invalid input

- need days in month that match that day
  - Meetup#days_in_month
    - take input day as argument
    - iterate through the month passed in from 1 to 31
      - if the day string is equal to the inputted string, select it
      - break when we are no longer in the month
      - increment day by 1
=end
require 'date'

class Meetup
  DESCRIPTORS = { first: 0, second: 1, third: 2, fourth: 3, fifth: 4, last: -1 }

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, descriptor)
    @day = select_day(weekday, descriptor.downcase.to_sym)
    @day.nil? ? @day : Date.civil(@year, @month, @day)
  end

  private

  def select_day(weekday, descriptor)
    days = days_in_month(weekday)
    descriptor == :teenth ? get_teenth(days) : days[DESCRIPTORS[descriptor]]
  end

  def days_in_month(weekday)
    last_day = Date.civil(@year, @month, -1).mday
    (1..last_day).select do |day|
      date = Date.civil(@year, @month, day)
      weekday.downcase == date.strftime('%A').downcase
    end
  end

  def get_teenth(days)
    (13..19).select { |day| days.include? day }.first
  end
end
