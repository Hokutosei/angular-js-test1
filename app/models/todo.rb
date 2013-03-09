class Todo < ActiveRecord::Base
  attr_accessible :done, :text
end
