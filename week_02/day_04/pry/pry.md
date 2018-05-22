
INTRO TO PRY

1. Give out the starter code and ask people to look at it for five mins to see what's going on, but not to run it. 

2. Talk through what the class method `number_of_cakes()` is returning, and why do we need the `reset_number_of_cakes()`. `number_of_cakes()` returns the class variable `@@number_of_cakes`, it keeps track of how many cake objects have been created. We need the reset because in our test every time we create a new cake, the class variable increases. Since we can't guarantee tests will run in order, it might create more than 2 in the setup). Emphasize that we're going to take a more in-depth look at them next week, more useful when database functions come along!

3. Run the test and read the error together.
'Cake can't be coerced into Integer'
Which suggests something isn't what we think it is. There is something that we think is an Integer, but is actually a Cake object.

PRY

Would it be nice if we didn't have to `puts` all the time to figure out what was going on in our programme. (Puts Driven Development is a bad thing)

We can use pry!
Pry is an alternative to IRB with syntax highlighting and better indentation.
But it also gives us breakpoints.
With pry we can add breakpoints into our code so that when we run our code, it stops executing at the breakpoint and allow us to look around and inspect things that have already been executed.


1.
Install Pry
` gem install pry pry-byebug`
> pry-byebug gives the "next" command

2.
In cake_shop.rb add
`require('pry')`

3.
So if we look again at the error, we know that the first error is on line 17, so let's put in a breakpoint on line 17.

```ruby 

ratings_sum = 0
for rating in @cakes
  binding.pry #NEW
  ratings_sum += rating
end

```


4.
Now when we run the test file we see pry in the terminal. 
Everything above the break point has been defined. 

If we do `ls` to see methods and variable.

So if we type `rating` we get 0 as expected.

But everything after the break point hasn't be executed yet, so if we type in `ratings_sum` we get nil.

5.
So in our loop, we have a varibale 'rating'. Each iteration through the loop we are adding the 'rating' to the 'counter', so we can assume that 'rating' should be an Integer.
Let's inspect 'rating'

```
# Terminal
rating
```

6. But we see 'rating' is the whole cake object. So when we are trying to add our 'rating' to our 'ratings_sum', it's giving us an error because it can't add a Cake object to an Integer. So our error makes sense: 'Cake can't be coerced into Integer'

7. Ok, so what are we iterating through? We thought we were iterating through the ratings, but actually we seem to be iterating through Cake objects. Let's inspect `@cakes`.

```
# Terminal
@cakes
```

8. So our mapping hasn't done anything. Oh look, that's because we forgot to save our mapping to a variable. Let's save it, updating the variable cakes, as that's what we are iterating through with our loop. 

```ruby
def average_cake_rating()

  ratings = @cakes.map { |cake| cake[:rating] } #NEW

  ratings_sum = 0
  for rating in ratings #NEW
    binding.pry
    ratings_sum += rating
  end

  average = ratings_sum / ratings.length #NEW
  
  return average

end
```

9. Escape pry `!!!` and run the test again. It works.

10. Once you have hit the breakpoint you can step through your code, line by line, using `next`.
The => shows us which line we are on.
Now that our loop doesn't produce an error, we can step through the code, inspecting the `rating` on each iteration of the loop.

- Run Test.
- `rating` = 5
- `next`
- `rating` = 3
etc
