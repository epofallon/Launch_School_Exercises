class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student # have the option to use on-campus parking
  def initialize(name, year, parking)
    @parking = parking
    super(name, year)
  end
end

class Undergraduate < Student # cannot use on campus parking
end

# cannot add or alter more than 5 lines of code