class UsersController < ApplicationController

  def show
    @user = User.find(params[:userId])
    render json: @user
  end

end