require_relative('../db/sql_runner')

class House

  attr_reader :id, :name

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @name = options['name']
  end

  def save
    sql = "INSERT INTO houses (name) VALUES ('#{@name}') RETURNING *"
    result = SqlRunner.run(sql)
    id = result.first["id"]
    @id = id.to_i
  end

  def self.find(id)
    sql = "SELECT * FROM houses WHERE id = #{id}"
    result = SqlRunner.run(sql).first
    house = House.new(result)
    return house
  end

  def self.all
    sql = "SELECT * FROM houses"
    houses = map_houses(sql)
    return houses
  end 

  def self.map_houses(sql)
    houses = SqlRunner.run(sql)
    return houses.map { |house| House.new(house) }
  end

end