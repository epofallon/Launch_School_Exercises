class GuessingGame
  def initialize
    @num = rand(NUM_RANGE)
  end
  
  def play
    MAX_GUESSES.downto(1) do |guesses|
      puts "You have #{guesses} remaining."
      make_guess
      result
      break if @guess == @num
    end
    puts @guess == @num ? 'You won!' : 'You have no more guesses. You lost!'
  end
  
  private
  
  MAX_GUESSES = 7
  NUM_RANGE = (1..100)
  
  def make_guess
    loop do
      print "Enter a number between #{NUM_RANGE.min} and #{NUM_RANGE.max}: "
      @guess = gets.chomp.to_i
      break if valid_num?
      print "Invalid guess. "
    end
  end
  
  def valid_num?
    NUM_RANGE === @guess
  end
  
  def result
    puts case @guess
         when (1...@num)      then "Your guess is too low."
         when (@num + 1..100) then "Your guess is too high."
         else                      "That's the number!"
         end
    puts ''
  end
end

game = GuessingGame.new
game.play
