require('pry')

class CakeShop

  attr_reader :cakes

  def initialize(cakes)
    @cakes = cakes
  end

  def average_cake_rating()

    ratings = @cakes.map { |cake| cake[:rating] }
    total = 0

    for rating in ratings
      binding.pry
      total += rating
    end

    average = total.to_f() / ratings.count().to_f()
    return average

  end

end


