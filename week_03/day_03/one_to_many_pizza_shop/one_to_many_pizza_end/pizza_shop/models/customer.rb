require_relative('../db/sql_runner.rb')
require_relative('./pizza_order.rb')

class Customer

  attr_reader(:id)
  attr_accessor(:name)

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @name = options['name']
  end

  def pizza_orders()
    sql = "SELECT * FROM pizza_orders WHERE customer_id = #{@id}"
    order_hashes = SqlRunner.run(sql)
    order_objects = order_hashes.map { |order_hash| PizzaOrder.new(order_hash) }
    return order_objects
  end

  def save()
    sql = "INSERT INTO customers (name) VALUES ('#{@name}') RETURNING *;"
    returned_array = SqlRunner.run(sql)
    customer_hash = returned_array[0]
    id_string = customer_hash['id']
    @id = id_string.to_i
  end

  def update()
    sql = "UPDATE customers SET (name) = ('#{@name}') WHERE id = #{@id};"
    SqlRunner.run(sql)
  end

  def delete()
    sql = "DELETE FROM customers where id = #{@id}"
    SqlRunner.run(sql)
  end

  def self.all()
    sql = "SELECT * FROM customers;"
    customer_hashes = SqlRunner.run(sql)
    customer_objects = customer_hashes.map do |person|
      Customer.new(person)
    end
    return customer_objects
  end

  def self.find(id)
    sql = "SELECT * FROM customers WHERE id = #{id}"
    results = SqlRunner.run(sql)
    customer_hash = results.first
    customer = Customer.new(customer_hash)
    return customer
  end

  def self.delete_all()
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end


end
