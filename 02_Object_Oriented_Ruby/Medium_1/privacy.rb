class Machine
  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  def status
    "the machince is #{switch}"
  end

  private
  attr_accessor :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

computer = Machine.new
p computer.status
computer.start
p computer.status
computer.stop
p computer.status