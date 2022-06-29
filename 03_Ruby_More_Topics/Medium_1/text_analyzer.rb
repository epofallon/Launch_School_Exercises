

class TextAnalyzer
  def process
    file = File.open("text.txt")
    
    yield(file.read)
    
    file.close
  end
end

analyzer = TextAnalyzer.new
analyzer.process { |txt| puts "#{txt.split("\n\n").size} paragraphs" }
analyzer.process { |txt| puts "#{txt.split("\n").size} lines" }
analyzer.process { |txt| puts "#{txt.split(' ').size} words" }