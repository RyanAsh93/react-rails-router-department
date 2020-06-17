class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

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
    render json: @product.destroy
  end

  def set_product
    @product = Product.find(params[:id])
  end
end
