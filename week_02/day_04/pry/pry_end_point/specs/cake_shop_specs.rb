require( 'minitest/autorun' )
require_relative( '../cake_shop' )


class TestCakeShop < MiniTest::Test

  def setup
    @cakes = [
      {
          name: "brownie",
          ingriedients: ["chocolate", "cocoa powder", "flour", "eggs", "sugar", "butter"],
          rating: 5
      },
      {
          name: "lemon drizzle",
          ingriedients: ["lemon juice", "flour", "eggs", "sugar", "butter"],
          rating: 3
      },
      {
          name: "carrot cake",
          ingriedients: ["carrots", "raisins", "cinnamon", "flour", "eggs", "sugar", "butter"],
          rating: 4
      }
    ]

    @kates_cakes = CakeShop.new(@cakes)
  end

  def test_average_cake_rating
    assert_equal(4.0, @kates_cakes.average_cake_rating())
  end


end
