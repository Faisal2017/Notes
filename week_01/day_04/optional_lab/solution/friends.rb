def get_name(person)
  return person[:name]
end

def favourite_tv_show(person)
  return person[:favourites][:tv_show]
end

def likes_to_eat(person, food)
  return person[:favourites][:things_to_eat].include?(food)
end

def add_friend(new_friend, person)
  person[:friends] << new_friend
end

def remove_friend(name, person)
  person[:friends].delete(name)
end

def total_funds(people)
  total = 0
  for person in people
    total += person[:monies]
  end
  return total
end

def lend_money(giver, reciever, value)
  giver[:monies] -= value
  reciever[:monies] += value
end

def all_foods(people)
  foods = []
  for person in people
    foods.concat(person[:favourites][:things_to_eat])
  end
  return foods
end

def no_friends(people)
  result = []
  for person in people
    result.push(person) if person[:friends].empty?
  end
  return result
end

def same_tv_show( friends )
  tv_shows = {}
  result = {}

  for friend in friends
    show = friend[:favourites][:tv_show]

    if tv_shows[show]
      tv_shows[show].push(friend[:name])
    else
      tv_shows[show] = [friend[:name]]
    end
  end

  for i in tv_shows.keys
    if tv_shows[i].size > 1
      result[i] = tv_shows[i].reverse
    end
  end

  return result
end

