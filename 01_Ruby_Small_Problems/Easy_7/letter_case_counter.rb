# UNDERSTAND THE PROBLEM
=begin
  - Rules / Requirements:
    - method takes a string
    - returns a hash
      - return hash contains 3 entries for lowercase, uppercase, and neither
    - counts uppercase letters, lowercase letters, then everything else
    
  - structure:
    - 'abCdef 123'
      - 'abdef' will count as lowercase
      - 'C' will count as uppercase
      - ' 123' will count as neiter
=end

# EXAMPLES / TEST CASES
=begin
  letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
  letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
  letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
  letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }
=end

# DATA STRUCTURE
 # - split string into an array of individual characters
 # - apply logic to each charachter, change a hash based on result
 
# ALGORITHM
=begin
  - initiate a result hash with a default of 0
  - split the given string into an array of characters
  - iterate over the array
    - if a character is lowercase add one to hash lowercase key
    - if a character is uppercase add one to hash uppercase key
    - else add one to hash neither key
  - return the result hash when iterationo is done
=end

def letter_case_count(string)
  case_count_hash = { lowercase: 0,
                      uppercase: 0,
                      neither: 0 }
  
  string.chars.each do |char|
    if ('a'..'z').include?(char)
      case_count_hash[:lowercase] += 1
    elsif ('A'..'Z').include?(char)
      case_count_hash[:uppercase] += 1
    else
      case_count_hash[:neither] += 1
    end
  end
  case_count_hash
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }