class ArtistsController < ApplicationController

  def index

  def api(artist)
    artistSearched =  'http://api.musicgraph.com/api/v2/artist/suggest?api_key=c8303e90962e3a5ebd5a1f260a69b138&prefix='+artist+'&limit=10'
    response = HTTParty.get(artistSearched)
    render json: response.body
    end
    api(params[:artist])
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

