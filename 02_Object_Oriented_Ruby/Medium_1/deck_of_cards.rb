class Card
  include Comparable
  
  RANKS = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }
  
  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end
  
  def <=>(other_card)
    rank_value <=> other_card.rank_value
  end
  
  def rank_value
    RANKS.fetch(rank, rank)
  end
  
  def to_s
    "#{rank} of #{suit}"
  end
end

# reset self if it runs out of cards

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  
  attr_reader :deck
  
  def initialize # shuffle deck when initialized
    # @deck = []
    create_deck
  end
  
  def create_deck
    @deck = RANKS.product(SUITS).map { |r, s| Card.new(r, s) }.shuffle
  end
  
  def draw # deals one card
    create_deck if deck.empty?
    deck.pop
  end
end

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
puts drawn.count { |card| card.rank == 5 } == 4
puts drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
puts drawn != drawn2 # Almost always.