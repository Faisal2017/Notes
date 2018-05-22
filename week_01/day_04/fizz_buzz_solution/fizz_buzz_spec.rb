require ('minitest/autorun')
require_relative('fizz_buzz')

class FizzBuzzTest < MiniTest::Test

  def test_fizzbuzz_3_returns_fizz
    assert_equal("Fizz", fizz_buzz(3))
  end

  def test_fizzbuzz_5_returns_buzz
    assert_equal("Buzz", fizz_buzz(5))
  end

  def test_fizzbuzz_15_returns_fizzbuzz
    assert_equal("FizzBuzz", fizz_buzz(15))
  end

  def test_fizzbuzz_7_returns_7
    assert_equal("7", fizz_buzz(7))
  end

end