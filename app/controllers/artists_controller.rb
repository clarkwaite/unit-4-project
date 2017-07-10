class ArtistsController < ApplicationController

  def index

    def api(artist)
    artistSearched =  'https://rest.bandsintown.com/artists/' + artist + '/events?app_id=discoversound'
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

