=begin
=== Understand the Problem ===
- Write a program that manages robot factory settings
  - When robots come off the factory floor they have no name
  - When they are booted up the first time a random name is generated
    - RX837, or BC811
  - If you reset a robot to it's factory setting its name will get wiped.
  - Names must be random
  - should NOT follow a predictable sequence
  - should NOT allow the use of the same name twice when avoidable.

- No constructor method needed
- getter for `name` instance variable will initialize a new name if there is no
  name, otherwise it will just reference name
- reset method will erase the current name

=== Data Structure ===
- Arrays of chars
- a string for the name

=== Algorithm ===
- Robot#name
  - If @name is nil
    - generate a new name
  - return reference to name

- Robot#reset
  - set @name to nil

- Robot#initialize_name
  - begin a loop
    - produce a candidate name
    - break unless candidate name is included in @@taken_names
  - assign @name to candidate name
=end

class Robot
  @@taken_names = []

  def name
    initialize_name if @name.nil?
    @name
  end

  def reset
    @@taken_names.delete(@name)
    @name = nil
  end

  private

  def initialize_name
    lets = [*'A'..'Z'].shuffle
    nums = [*'0'..'9'].shuffle
    new_name = nil

    until @name
      new_name = (lets.sample(2) + nums.sample(3)).join
      @name = new_name unless @@taken_names.include?(new_name)
    end

    @@taken_names << new_name
  end
end
