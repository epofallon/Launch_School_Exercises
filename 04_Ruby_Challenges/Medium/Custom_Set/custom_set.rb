=begin
=== Understand the Problem ===
- Create a custom set type
- behaves like a set of unique elements that can be manipulated in several well
  defined ways.
- You may assume that all elements of a set must be numbers.


=== Algorithm === 
- constructor (takes an optional argument array)
- #empty? - returns true if the set is empty
- #subset? - an empty set is a subset of another empty set
           - an empty set is a subset of a non empty set
           - a non empty set is not a subset of an empty set
           - a set with the same data is a subset of a set
           - a set with some
=end
class CustomSet
  def initialize(arr=[])
    @arr = arr.uniq
  end

  def empty?
    arr.empty?
  end

  def contains?(obj)
    arr.include? obj
  end

  def subset?(other_set)
    arr.all? { |obj| other_set.contains?(obj) }
  end

  def disjoint?(other_set)
    arr.none? { |obj| other_set.contains?(obj) }
  end

  def eql?(other_set)
    subset?(other_set) && other_set.subset?(self)
  end
  
  alias_method :==, :eql?

  def add(obj)
    arr << obj unless contains? obj
    self
  end

  def intersection(other_set)
    intersected_arr = arr.select { |obj| other_set.contains?(obj) }
    CustomSet.new(intersected_arr)
  end

  def difference(other_set)
    intersected_arr = arr.select { |obj| !other_set.contains?(obj) }
    CustomSet.new(intersected_arr)
  end

  def union(other_set)
    CustomSet.new(arr.union(other_set.arr))
  end

  protected

  attr_reader :arr
end