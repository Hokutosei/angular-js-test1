require 'rubygems'
#require 'mongo'

class CreatePk

  def create_pk
#    @count = Todo.last
#    @count = (@count.primary_key.to_i) + 10
    return BSON::ObjectId.new
  end

end