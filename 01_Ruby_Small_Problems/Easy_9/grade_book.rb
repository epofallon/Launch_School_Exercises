# UNDERSTAND THE PROBLEM
=begin
  - determine the mean (average) of the three scores passed in to a method
  - return the letter value associated with that grade
=end

def get_grade(grade1, grade2, grade3)
  average = (grade1 + grade2 + grade3) / 3
  if average >= 0 && average < 60
    'F'
  elsif average >= 60 && average < 70
    'D'
  elsif average >= 70 && average < 80
    'C'
  elsif average >= 80 && average < 90
    'B'
  elsif average >= 90 && average <= 100
    'A'
  end
end

p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"