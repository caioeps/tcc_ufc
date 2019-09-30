# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = user_class.all

    render json: users
  end

  def show
    render json: user
  end

  def create
    user = user_class.new(user_params)

    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    user.destroy
  end

  private

  def user
    @user ||= user_class.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :address)
  end

  def user_class
    params.fetch(:user_class, 'User').constantize
  end
end
