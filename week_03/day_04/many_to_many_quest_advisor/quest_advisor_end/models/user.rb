require_relative("../db/sql_runner")

class User

  attr_reader :id
  attr_accessor :name

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO users (name) VALUES ('#{ @name }') RETURNING id"
    user = SqlRunner.run( sql ).first
    @id = user['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM users"
    return self.get_many(sql)
  end

  def self.delete_all()
   sql = "DELETE FROM users"
   SqlRunner.run(sql)
  end

  def locations()
    sql = "SELECT locations.* from locations 
           INNER JOIN visits ON visits.location_id = locations.id 
           WHERE user_id = #{@id}"
    return Location.get_many(sql)
  end

  def reviews()
    sql = "SELECT locations.*, visits.* from locations 
           INNER JOIN visits ON visits.location_id = locations.id 
           WHERE user_id = #{@id}"
    results = SqlRunner.run(sql)
    return results.map { |result| "#{result['name']}: #{result['review']}" }
  end

  def self.get_many(sql)
    users = SqlRunner.run(sql)
    result = users.map { |user| User.new( user ) }
    return result
  end

end