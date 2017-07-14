class FavoritesController < ApplicationController
  
  def index
    @user = User.find(params[:userId])
    @favorites = @user.artists
    @events = @user.events
    render json: { favorites: @favorites, events: @events } 
  end

  def new
    @favorite = Favorite.new(fav_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @favorite = @user.favorites.where(artist_id: [params[:artist_id]])
    if @favorite.delete_all
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