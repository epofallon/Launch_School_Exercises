print 'Please write word or multiple words: '
words = gets.chomp

chars = words.tr_s(' ', '').length

puts "There are #{chars} characters in \"#{words}\"."