# Rot13
# Rotates letters by 13 places
# A <-> N
# B <-> O
# C <-> P
# D <-> Q
# E <-> R
# F <-> S
# G <-> T
# H <-> U
# I <-> V
# J <-> W
# K <-> X
# L <-> Y
# M <-> Z

# PEDAC
# Understand the Problem
# - Letters are swapped with their counterpart 13 spaces away
# - Need to account for case specific letters
# - 
# Examples

# Data Structure
# - an array of characters

# Algorithm
# - split the string into an array of words
#   - split each word into an array of characters
#     - set the comparator to 'a'.ord or 'A'.ord for the current character
#     - if the difference from the current character to 'a'/'A' is greater than 13
#       - subtract 13 from the ordinal
#       - else add 13 to the ordinal
#   - concatenate each word together
# - concatenate the words back into a string

# Code

# def decipher(str)
#   str.split.map do |word|
#     word.chars.map do |char|
#       if !('a'..'z').include?(char.downcase)
#         char
#       else
#         a_char = char.upcase == char ? 'A'.ord : 'a'.ord
#         if char.ord - a_char.ord > 12
#           (char.ord - 13).chr
#         else
#           (char.ord + 13).chr
#         end
#       end
#     end.join
#   end.join(' ')
# end

# puts decipher("Nqn Ybirynpr")
# puts decipher("Tenpr Ubccre")
# puts decipher("Nqryr Tbyqfgvar")
# puts decipher("Nyna Ghevat")
# puts decipher("Puneyrf Onoontr")
# puts decipher("Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv")
# puts decipher("Wbua Ngnanfbss")
# puts decipher("Ybvf Unvog")
# puts decipher("Pynhqr Funaaba")
# puts decipher("Fgrir Wbof")
# puts decipher("Ovyy Tngrf")
# puts decipher("Gvz Orearef-Yrr")
# puts decipher("Fgrir Jbmavnx")
# puts decipher("Xbaenq Mhfr")
# puts decipher("Fve Nagbal Ubner")
# puts decipher("Zneiva Zvafxl")
# puts decipher("Lhxvuveb Zngfhzbgb")
# puts decipher("Unllvz Fybavzfxv")
# puts decipher("Tregehqr Oynapu")


ENCRYPTED_PIONEERS = [
  'Nqn Ybirynpr',
  'Tenpr Ubccre',
  'Nqryr Tbyqfgvar',
  'Nyna Ghevat',
  'Puneyrf Onoontr',
  'Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv',
  'Wbua Ngnanfbss',
  'Ybvf Unvog',
  'Pynhqr Funaaba',
  'Fgrir Wbof',
  'Ovyy Tngrf',
  'Gvz Orearef-Yrr',
  'Fgrir Jbmavnx',
  'Xbaenq Mhfr',
  'Fve Nagbal Ubner',
  'Zneiva Zvafxl',
  'Lhxvuveb Zngfhzbgb',
  'Unllvz Fybavzfxv',
  'Tregehqr Oynapu'
].freeze

def rot13(encrypted_text)
  encrypted_text.each_char.reduce('') do |result, encrypted_char|
    result + decipher_character(encrypted_char)
  end
end

def decipher_character(encrypted_char)
  case encrypted_char
  when 'a'..'m', 'A'..'M' then (encrypted_char.ord + 13).chr
  when 'n'..'z', 'N'..'Z' then (encrypted_char.ord - 13).chr
  else                         encrypted_char
  end
end

ENCRYPTED_PIONEERS.each do |encrypted_name|
  puts rot13(encrypted_name)
end