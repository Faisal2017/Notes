class Cake

  attr_reader :name, :ingredients, :rating

  @@number_of_cakes = 0

  def initialize(name, ingredients, rating)
    @@number_of_cakes += 1
    @name = name
    @ingredients = ingredients
    @rating = rating
  end

  def Cake.number_of_cakes()
    return @@number_of_cakes
  end

  def Cake.reset_number_of_cakes()
    @@number_of_cakes = 0
  end

end