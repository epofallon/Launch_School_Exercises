# UNDERSTAND THE PROBLEM
=begin
  - Rules / Requirements
    - Input: a string
    - Output: a new string
    
    - transform string with a staggered capitalization scheme
      - first character is uppercase, second character is lowercase
    - non alphabetic characters remain the same
=end

# EXAMPLES / TEST CASES
  # staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
  # staggered_case('ALL_CAPS') == 'AlL_CaPs'
  # staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# DATA STRUCTURE
  # iterate over string

# ALGORITHM
=begin
  - split string into an array
  - map with index 
    - if index is even uppercase letter
    - if index is odd lowercase letter
  - join array back into a string
=end

def staggered_case(string, upper_or_lower, non_alphas_include)
  result = ''
  need_upper = (upper_or_lower == 0)
  string.chars.each do |char|
    
    if need_upper
      result += char.upcase
    else
      result += char.downcase
    end
    
    if !non_alphas_include
      next unless /[a-zA-Z]/.match(char)
    end
    need_upper = !need_upper
  end
  result
end

p staggered_case('I Love Launch School!', 0, true) #== 'I lOvE lAuNcH sChOoL!'
#p staggered_case('ALL CAPS') == 'AlL cApS'
#p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'