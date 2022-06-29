# Understand the Problem
=begin
  A 90-degree rotation of matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees.
  
  Write a method tha takes an arbitray matrix and rotates it 90 degrees clockwise.
  
  - input: an Array of Arrays
  - output: an Array of Arrays
    - rotated 90-degrees clockwise
  - explicit rules:
    - rotate the matrix 90 degrees clockwise
  - implicit rules:
    - return a new matrix
=end

# Examples / Test Cases
=begin
  matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ]
  
  matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8]
  ]
  
  new_matrix1 = rotate90(matrix1)
  new_matrix2 = rotate90(matrix2)
  new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))
  
  p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
  p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
  p new_matrix3 == matrix2
=end

# Data Structure
  # An array of aarrays
  
# Algorithm
=begin
  - initialize r_mat = []
  - from 0 to n_rows in matrix (exclude n_rows)
    - new_row = 0 to n_colums in matrix
      - (n_rows - 1) - current row number
    - r_mat << new_row
  - r_mat
=end

def rotate90(matrix)
  r_mat = []
  n_rows = matrix.size
  n_columns = matrix.first.size
  
  (0...n_columns).each do |col_num|
    new_row = (0...n_rows).map do |row_num|
                matrix[(n_rows - 1) - row_num][col_num]
              end
    r_mat << new_row
  end
  
  r_mat
end

def rotate_by_angle(matrix, angle)
  new_mat = matrix
  (angle / 90).times{ new_mat = rotate90(new_mat) }
  new_mat
end

  matrix1 = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6]
  ]
  
  matrix2 = [
    [3, 7, 4, 2],
    [5, 1, 0, 8]
  ]
  
  new_matrix1 = rotate90(matrix1)
  new_matrix2 = rotate90(matrix2)
  new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))
  
  p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
  p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
  p new_matrix3 == matrix2
  
  p ' '
  p matrix2
  p rotate_by_angle(matrix2, 90)
  p rotate_by_angle(matrix2, 180)
  p rotate_by_angle(matrix2, 270)
  p rotate_by_angle(matrix2, 360)