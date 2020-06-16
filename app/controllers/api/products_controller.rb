class Api::ProductsController < ApplicationController

  def index
    render json: Product.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
