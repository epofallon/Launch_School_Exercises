=begin
=== Understand the Problem ===
- write a simple linked list implementation
- linked list: a fundamental data structure in computer science, often used in
  the implementation of other data structures.
- singly linked list: each element in the list contains data and a 'next' field
  pointing to the next element in the list of elements.
  - often used to represent sequences or push-down stacks (last in, first out).

- create a singly linked list whose elements may contain a range of data such as
  the numbers 1 - 10.
  - provide a function to reverse the linked list
  - provide a function to convert a linked list to an array
  - provide a function to convert an array to a linked list

=== Test Cases ===
- class Element
  - instance methods
    - datum
    - tail?
    - next
    - constructor
- class SimpleLinkedList
  - instance methods
    - size
    - empty?
    - push
    - peek
    - head
    - pop
    - to_a
    - reverse # return new object
  - class methods
    - from_a

=== Data Structure ===
- instance variable for element
- an array to hold the elements of a simple linked list

=== Algorithm ===
- class Element
  - instance methods
    - datum # getter method for the data point
    - tail? # means there is no next element
      - returns `true` if there is no next element
    - next
      - returns reference to other Element object
    - constructor
      - first argument is the data point
      - second argument if given is a reference to another Element object
- class SimpleLinkedList
  - instance methods
    - size
    - empty?
    - push
    - peek
    - head
    - pop
    - to_a
    - reverse # return new object
  - class methods
    - from_a
=end
require 'pry'
class Element
  attr_reader :datum, :next

  def initialize(datum, next_element = nil)
    @datum = datum
    @next = next_element
  end

  def tail?
    @next.nil?
  end
end

class SimpleLinkedList
  attr_reader :head
  
  def size
    count = 0
    head_element = @head
    until head_element.nil?
      count += 1
      head_element = head_element.next
    end
    count
  end
  
  def empty?
    @head.nil?
  end
  
  def push(new_datum)
    @head = Element.new(new_datum, @head)
  end
  
  def peek
    @head ? @head.datum : @head
  end
  
  def pop
    popped = @head.datum
    @head = @head.next
    popped
  end
  
  def self.from_a(arr)
    list = new
    arr.reverse_each { |datum| list.push(datum) } if arr
    list
  end
  
  def to_a
    arr = []
    head_element = @head
    until head_element.nil?
      arr << head_element.datum
      head_element = head_element.next
    end
    arr
  end
  
  def reverse
    list = SimpleLinkedList.new
    head_element = @head
    until head_element.nil?
      list.push(head_element.datum)
      head_element = head_element.next
    end
    list
  end
end
