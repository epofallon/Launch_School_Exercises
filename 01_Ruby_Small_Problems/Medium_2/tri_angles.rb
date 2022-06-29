# Understand the Problem
=begin
  - Triangle Classes:
    - Right: One angle of the triangle is 90 degrees
    - Acute: All 3 angles are less than 90 degrees
    - Obtuse: One angle of the triangle is greater than 90 degrees
  - To be a valid trianlge
    - The sum of the angles must be exactly 180 degrees
    - all angles must be greater than 0 degrees
    
=end

def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3]
  case
  when angles.any?{|angle| angle <= 0}, angles.sum != 180 then :invalid
  when angles.any?{|angle| angle > 90} then :obtuse
  when angles.all?{|angle| angle < 90} then :acute
  else :right
  end
end

p triangle(60, 70, 50) #== :acute
p triangle(30, 90, 60) #== :right
p triangle(120, 50, 10) #== :obtuse
p triangle(0, 90, 90) #== :invalid
p triangle(50, 50, 50) #== :invalid
