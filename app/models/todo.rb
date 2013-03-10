class Todo# < ActiveRecord::Base
  #attr_accessible :done, :text

  include MongoMapper::Document
  before_validation :add_pk, :on => :create

  key :id,            ObjectId
  key :primary_key,   Object
  key :title,         String
  key :done,          Boolean
  key :updated_at,    DateTime
  timestamps!

  def add_pk
    self.primary_key = CreatePk.new.create_pk
  end

end
