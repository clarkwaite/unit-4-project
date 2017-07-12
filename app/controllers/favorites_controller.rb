class FavoritesController < ApplicationController
  def index
    @user = User.find(params[:userId])
    @favorites = Artist.joins(:favorites).where(favorites: { user_id: [@user.id] })
    render json: @favorites
  end

  def new
    @favorite = Favorite.new(fav_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors
    end
  end

  def delete
     @user = User.find(params[:userId])
    @favorite = Favorite.find(params[:id])
    if @favorite.delete
      render json: {message: "successfully deleted favorite"}
    else
      render status: 500,
        json: {error: "error deleting favorite"}
    end
  end

  private
 
  def fav_params
    params.require(:favorite).permit(:user_id, :artist_id)
  end
end #close of favorite controller