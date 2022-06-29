class Card
  include Comparable
  
  RANKS = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }
  SUITS = { 'Spades' => 4, 'Hearts' => 3, 'Clubs' => 2, 'Diamonds' => 1 }
  
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
  
  def <=>(other_card)
    if rank == other_card.rank
      suit_value <=> other_card.suit_value
    else
      rank_value <=> other_card.rank_value
    end  
  end
  
  def rank_value
    RANKS.fetch(rank, rank)
  end
  
  def suit_value
    SUITS[suit]
  end
  
  def to_s
    "#{rank} of #{suit}"
  end
end

# determine the lowest ranking and highest ranking cards in an Array of Card objects
# - lowest to highest: 2 - 10, Jack, Queen, King, Ace
# - suit plays no part in relative ranking
# - if you have two or more cards of the same rank in your list, your `min` and `max` methods should return one of the matching cards (doesn't matter which one)
# - create a to_s method that returns a String representation of the card
#   - "Jack of Diamonds" or "4 of Clubs"

cards = [Card.new(2, 'Hearts'),
         Card.new(10, 'Diamonds'),
         Card.new('Ace', 'Clubs')]
# puts cards
p cards.min.to_s #== Card.new(2, 'Hearts')
p cards.max(2).map(&:to_s) #== Card.new('Ace', 'Clubs')

cards = [Card.new(5, 'Hearts')]
puts cards.min == Card.new(5, 'Hearts')
puts cards.max == Card.new(5, 'Hearts')

cards = [Card.new(4, 'Hearts'),
         Card.new(4, 'Diamonds'),
         Card.new(10, 'Clubs')]
puts cards.min == Card.new(4, 'Diamonds')
puts cards.max == Card.new(10, 'Clubs')

cards = [Card.new(7, 'Diamonds'),
         Card.new('Jack', 'Diamonds'),
         Card.new('Jack', 'Spades')]
puts cards.min == Card.new(7, 'Diamonds')
puts cards.max == Card.new('Jack', 'Spades')

cards = [Card.new(8, 'Diamonds'),
         Card.new(8, 'Clubs'),
         Card.new(8, 'Spades')]
puts cards.min == Card.new(8, 'Diamonds')
puts cards.max == Card.new(8, 'Spades')