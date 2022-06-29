=begin
== Understand the Problem ==
- Write a program to determin wether a triangle is equilateral, isosceles, or scalene.
- Equilateral Triangle: A triangle that has all three sides the same length.
- Isosceles Triangle: A triangle that has exactly two sides the same length.
- Scalene Triangle: A triangle that has sides of different lengths.

- All sides must be > 0
- The sum of the lengths of any two sides must be greater than the length of the third side.

== Data Structure ==
- three instance varaibles (one for each side)

== Algorithm ==
- Initialize triangle that takes three arguments
  - test input
    - is anything less than or equal to 0?
    - is the sum of the length of any two sides greater than the length of the thrid side?
      - pull out the sum of the two least 
      
  - kind
    - return 'scalene' if is a scalene triangle
    - return 'isosceles' if is a isosceles triangle
    - return 'equilateral' if is an equilateral trianlge
=end

class Triangle
  def initialize(s1, s2, s3)
    @sides = [s1, s2, s3]
    validate_input
  end
  
  def kind
    case @sides.uniq.size
    when 1 then 'equilateral'
    when 2 then 'isosceles'
    else 'scalene'
    end
  end
  
  private
  
  def validate_input
    if @sides.any?{|side| side <= 0}
      raise ArgumentError.new('All sides must be greater than 0')
    elsif @sides.min(2).sum <= @sides.max
      raise ArgumentError.new('Sum of two sides is not greater than third side')
    end
  end
end


Triangle.new(1, 0, 3)