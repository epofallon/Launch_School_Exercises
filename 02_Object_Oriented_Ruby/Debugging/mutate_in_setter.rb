class TestClass
  attr_reader :test
  
  def initialize
    @test = 'this is a test'
  end
  
  def test=(str)
    @test = str
    @test.upcase!
  end
end

test_case = TestClass.new
p test_case.test
test_case.test[5..6] = 'IS'
p test_case.test
test_case.test 
p test_case.test = 'hello world'