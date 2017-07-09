class ArtistsController < ApplicationController


  def index
    @artists = Artist.all
    render json: @artists  
    #Overwrites the assumption to render an index.html.erb
  end

  def create
    @artist = Artist.create!(artist_params)
    # redirect_to artist_path(@artist)
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :genre, :website, :images, :spotify_href, :spotify_id)
  end


end

