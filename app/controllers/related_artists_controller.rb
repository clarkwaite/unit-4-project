class RelatedArtistsController < ApplicationController

  def index
    def api(artistId)
      relatedArtists = 'http://api.musicgraph.com/api/v2/artist/'+artistId+'/similar?api_key=83dccfcabc5dc9c38740b98935e7c209'
      response = HTTParty.get(relatedArtists)
      render json: response.body
    end
    api(params[:artistId])
  end

end