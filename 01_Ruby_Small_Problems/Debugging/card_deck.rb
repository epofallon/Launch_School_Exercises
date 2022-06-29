require 'pry'
cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, :jack, :queen, :king, :ace]

def make_deck(cards)
  deck = Hash.new([])
  binding.pry
  [:hearts, :diamonds, :clubs, :spades].each do |suit|
    cards.each do |card|
      deck[suit] += [card]
    end
  end
  deck
end

deck = make_deck(cards)

def score(card)
  case card
  when :ace   then 11
  when :king  then 10
  when :queen then 10
  when :jack  then 10
  else card
  end
end

# Pick one random card per suit

player_cards = []
deck.keys.each do |suit|
  cards = deck[suit]
  cards.shuffle!
  player_cards << cards.pop
end
p player_cards
# Determine the score of the remaining cards in the deck
binding.pry
sum = deck.reduce(0) do |sum, (_, remaining_cards)|
  scores = remaining_cards.map do |card|
    score(card)
  end

  sum += scores.sum
end

puts sum