# One to Many Intro

#### Objectives

- Explain what a one to many relationship is
- Demonstrate setting up a SQL database and tables with a foreign key

So far we have just been relating one model with one database table. However the power of relational databases like Postgres is that you can have relationships, or associations, between different tables, and then we can reflect this in our Ruby modelling.

Today we will be looking at a 'one-to-many' relationship. One row in one table is related to many rows in another. 

Yesterday we were creating a database of Pizza Orders. However if a customer were to make several orders, there's no way to keep a record of all the orders this customer has made. What if we separated out the 'first_name' and 'last_name' columns on the PizzaOrders table to be their own table of Customers?

### What's the relationship?

Customer has many PizzaOrders

PizzaOrder belongs to one Customer

What are the benefits of having this relationship?

- The customer could go back and look at previous orders to remember what the name of that awesome pizza they got last time was
- The shop could look at a customer's orders and send them special deals for things they order often
- A customer could create an account and not have to enter their delivery details and phone number each time

...and many more. When there's a relationship between two things it makes sense to represent this in our database.

### Setup

First get our files from yesterday. If you want to have that stuff separately to look at you can copy it, but you'll have to make a second database with a different name to be working on.

Planning - what do our new tables need to look like? Customer has a name and id, PizzaOrder has id, topping, quantity, and customer_id. 

Let's set up our new Customers table in our SQL file.

```sql
-- pizza_shop.sql
DROP TABLE pizza_orders;
DROP TABLE customers;

CREATE TABLE customers (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE pizza_orders (
  -- delete the first_name and last_name from pizza_orders
  id SERIAL4 PRIMARY KEY,
  topping VARCHAR(255),
  quantity INT2
);
```

Now run the SQL file:

```bash
#terminal 

psql -d pizza_shop -f db/pizza_shop.sql
```

So at the moment, our models are completely unrelated. Pizza Orders know nothing about Customers and Customers know nothing about Pizza Orders. How can we relate a customer to a set of orders? 

We can use a foreign key in the orders table. We do this with the references keyword, and specify which column of another table it is linked to. Every time an order is created, it should be given a relevant customer's id that it is attached to.

```sql
-- pizza_shop.sql
CREATE TABLE pizza_orders (
  id SERIAL4 PRIMARY KEY,
  topping VARCHAR(255),
  quantity INT2,
  customer_id INT4 REFERENCES customers(id)
);
```

We are dropping the pizza_orders table first because it references some customers so it can't exist without the customers table.

Revision from Monday: Why do we use the references keyword instead of just having a customer_id that's an INT4? It ties it to a primary key in another table, and makes sure we can't just write nonsense or reference a customer that doesn't exist. It makes sure it's UNIQUE and NOT NULL.

## Models

Let's make a Customer model:
```bash
#terminal:
touch models/customer.rb
```

```ruby
# customer.rb
require( 'pg' )

class Customer

  attr_reader :id, :name 

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end
```

TASK: Write the save method for Customer

```ruby
# customer.rb
def save()
  db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
  sql = "INSERT INTO customers (name) VALUES ('#{ @name }') RETURNING *"
  result = db.exec(sql)
  db.close()
  @id = result[0]['id'].to_i
end
```

Check that you can save new customers:

WARNING: If you are using the code from yesterday as a start point, empty out your `console.rb` and start again. Your code for making new `PizzaOrder` objects will not work.

```ruby
# console.rb
require('pry-byebug')
require_relative('../models/pizza_order')
require_relative('../models/customer')

customer1 = Customer.new({ 'name' => 'Zsolt' })
customer1.save()

binding.pry
nil
```

```bash
ruby db/console.rb
```

Let's quickly make a `Customer.delete_all` method so that we don't duplicate our seed data every time we run `console.rb`

```ruby
# customer.rb
def self.delete_all()
  db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
  sql = "DELETE FROM customers"
  result = db.exec(sql)
  db.close()
end
```

And call it in `console.rb` before we create any new objects.

```ruby
# console.rb
Customer.delete_all() # NEW

customer1 = Customer.new({ 'name' => 'Zsolt' })
customer1.save() 
```

We now also have to edit our PizzaOrder class to include the customer ID.

```ruby
# pizza_order.rb
attr_reader :topping, :quantity, :customer_id # UPDATED
def initialize( options )
  @id = options['id'].to_i if options['id']
  @topping = options['topping']
  @quantity = options['quantity'].to_i
  @customer_id = options['customer_id'].to_i # NEW
  # removed first and last name
end

def save()
  db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
  sql = "INSERT INTO pizza_orders (
    topping,
    quantity,
    customer_id
  ) VALUES (
    '#{ @topping }',
    #{ @quantity },
    #{ @customer_id }
  );" # UPDATED
  result = db.exec(sql)
  db.close()
  @id = result[0]['id'].to_i
end
```

Because we used the `RETURNING` keyword in and updated the `@id` in our `.save` method, we can write seed data for PizzaOrders that dynamically uses the ID of previously created Customers:

```ruby
# console.rb
PizzaOrder.delete_all() # NEW -  SHOULD BE BEFORE Customer.delete_all

customer1.save() #do we need this line

order1 = PizzaOrder.new({ 
  'customer_id' => customer1.id,
  'topping' => 'pepperoni', 
  'quantity' => 2
})
order1.save()
```

## Refactoring

As we can see we have some repeated code where we go to talk to the database. This is only going to increase in repetition as we add more database related methods. Let's separate that code out into its own class, called SqlRunner, which we just pass a SQL string to to be executed, and it will return the result of the query.


```bash
# terminal
touch db/sql_runner.rb
```

```ruby
# sql_runner.rb
require ('pg')

class SqlRunner
  def self.run( sql )
    begin
      db = PG.connect({ dbname: 'pizza_shop', host: 'localhost' })
      result = db.exec( sql )
    ensure
      db.close()
    end
    return result
  end
end
```

What does the `begin`/`ensure`/`end` block do?
- The `begin` block is where we do the thing we want to do
- The `ensure` block is stuff we want to make sure happens _even_ if an error is thrown in the begin block

Now let's use this in our Customer and PizzaOrder models.

Let's make an `.all()` method for the customer model just so we can easily have a look at all of our customers.

```ruby
# customer.rb

# at top of file add:
require_relative('../db/sql_runner')

def self.all()
  sql = "SELECT * FROM customers;"
  customers = SqlRunner.run( sql )
  return customers.map { |person| Customer.new( person ) }
end
```

TASK: Change the other database calling methods to use our SqlRunner helper.

## Retrieving our customer from orders 

OK, so now we have a customer and order which should be related. The power of these database relationships is that they link data together, so we want to be able to make use of that in our Ruby models.

It would be great to be able to call `order1.customer()` and see who it is and see their address to deliver to, or for the customer to be able to call `customer1.pizza_orders()` and see a list of all their past orders.

What could we do to get back the customer related to our order?

These 2 methods are actually going to be look quite similar to our existing methods which access the database.

TASK:
Write the `.customer` method for our PizzaOrder class and the `.pizza_orders` method for our Customer class.

Some tips:

`.customer` method:
- Our Order objects know their own `@customer_id`
- We can use this in our SQL statement (use SqlRunner) to get back the customer data.
- Our `.customer` method should return a Customer object, an instance of the Customer class

`.pizza_orders` method
- Our Customer objects know their own `@id`
- We can use this in our SQL statement (use SqlRunner) to get back the data for all of their orders.
- Our `.pizza_orders` method should return an **array** of PizzaOrder objects, instances of the PizzaOrder class


```ruby
# pizza_order.rb
#at top of file add:
require_relative('customer')

def customer()
  sql = "SELECT * FROM customers WHERE id = #{ @customer_id }"
  results = SqlRunner.run( sql )
  customer_data = results[0]
  customer = Customer.new( customer_data )
  return customer
end
```

```ruby
# customer.rb
#at top of file add:
require_relative('pizza_order')

def pizza_orders()
  sql = "SELECT * FROM pizza_orders WHERE customer_id = #{ @id }"
  results = SqlRunner.run( sql )
  orders = results.map { |order| PizzaOrder.new( order ) }
  return orders
end
```

Now when we run `console.rb` again we can do this:

```ruby
# pry
order1 # is a PizzaOrder object
order1.customer # gets us a Customer object from our PizzaOrder object
order1.customer.pizza_orders # gets us an array of PizzaOrder objects
order1.customer.pizza_orders[0] # gets us just the first PizzaOrder object
order1.customer.pizza_orders[0].customer # gets us the same Customer object back again
```

Now our ruby models are inter-linked, we can get the Customer from the PizzaOrder and we can get all the PizzaOrders for a Customer. So now our ruby models are taking full advantage of the relationship that we set up in our database.
