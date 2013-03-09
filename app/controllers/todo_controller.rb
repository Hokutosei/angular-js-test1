class TodoController < ApplicationController
  respond_to :html, :json

  def index
    @todos = Todo.all
    respond_with @todos
  end

  def save_todo
    @todo = Todo.new(params[:todo])
    @todo.save
    respond_with @todo
  end

  def delete_todo
    @todo = Todo.delete(params[:id])
    respond_with @todo
  end

  def todo_done
    @todo = Todo.find_by_id(params[:id])
    if @todo.done
      @todo.done = false
    else
      @todo.done = true
    end
    @todo.save
    respond_with @todo
  end
end
