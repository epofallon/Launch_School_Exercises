=begin
=== Understand the Problem ===
- write a program that can generate the lyrics of the 9 bottles of beer song.

- for bottles 99 - 3 lyric is the same
    #{n} bottles of beer on the wall, #{n} bottles of beer.
    Take one down and pass it around, #{n - 1} bottles of beer on the wall.
- for bottle #2 the lyriv is:
    #{n} bottles of beer on the wall, #{n} bottles of beer.
    Take one down and pass it around, #{n - 1} bottle[] of beer on the wall.
- for bottle #1 the lyric is:
    #{n} bottle[] of beer on the wall, #{n} bottle[] of beer.
    Take [it] down and pass it around, [no] bottles of beer on the wall.
- for 0 bottles the lyric is:
    [No more] bottles of beer on the wall, [no more] bottles of beer.
    [Go to the store and buy some more], [99] bottles of beer on the wall.
- place a blank line between each lyric

=== Data Structure ===
- an array of lyrics

=== Algorithm ===
- verse (Class Method)
  - return a single verse of the beer song
    - select verse based on input number (private class methods for independent
      verses)
    - return

=end

class Verse
  attr_reader :bottle

  def initialize(bottle)
    @bottle = bottle
  end

  def single_verse
    case bottle
    when 1 then verse_1
    when 0 then verse_0
    else verse_99_to_2
    end
  end

  private

  def verse_99_to_2
    <<~LYRIC
    #{bottle} bottles of beer on the wall, #{bottle} bottles of beer.
    Take one down and pass it around, #{bottle - 1} bottle#{include_s} of beer on the wall.
    LYRIC
  end

  def include_s
    's' unless bottle - 1 == 1
  end

  def verse_1
    <<~LYRIC
    1 bottle of beer on the wall, 1 bottle of beer.
    Take it down and pass it around, no more bottles of beer on the wall.
    LYRIC
  end

  def verse_0
    <<~LYRIC
    No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.
    LYRIC
  end
end

class BeerSong
  def self.lyrics
    verses(99, 0)
  end

  def self.verse(n)
    Verse.new(n).single_verse
  end

  def self.verses(start, finish)
    (finish..start).to_a.reverse.map { |n| verse(n) }.join("\n")
  end
end
