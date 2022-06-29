# accept a low and high value when you create a GuessingGame object
require 'pry'
class GuessingGame
  def initialize(low, high)
    @num_range = (low..high)
    @num = rand(@num_range)
    @num_guesses = Math.log2(high - low).to_i + 1
  end
  
  def play
    @num_guesses.downto(1) do |guesses|
      puts "You have #{guesses} remaining."
      make_guess
      # binding.pry
      result
      break if @guess == @num
    end
    puts @guess == @num ? 'You won!' : 'You have no more guesses. You lost!'
  end
  
  private
  
  def make_guess
    loop do
      print "Enter a number between #{@num_range.min} and #{@num_range.max}: "
      @guess = gets.chomp.to_i
      break if valid_num?
      print "Invalid guess. "
    end
  end
  
  def valid_num?
    @num_range === @guess
  end
  
  def result
    puts case @guess
         when (@num_range.min...@num)      then "Your guess is too low."
         when (@num + 1..@num_range.max) then "Your guess is too high."
         when @num            then "That's the number!"
         end
    puts ''
  end
end

game = GuessingGame.new(1, 1501)
game.play