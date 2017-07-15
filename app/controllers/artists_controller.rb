class ArtistsController < ApplicationController
# returns all artists from the musicgraph API search
  def index
    def api(artist)
      artistSearched = 'http://api.musicgraph.com/api/v2/artist/suggest?api_key=83dccfcabc5dc9c38740b98935e7c209&prefix='+artist+'&limit=10'
      response = HTTParty.get(artistSearched)
      render json: response.body
    end
    api(params[:artist])
  end
#checks for artist in the database and creates a new artist if it does not exist - and renders the saved info
  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      events = eventApi(@artist.name)
  #makes an api call of the events for the artist and saves them to the DB    

  #{"errors":["Unknown Artist"]}

      events.each do |event|
       
        Event.create!(
          date: event["datetime"],
          lineup: event["lineup"],
          #fix this so you can get the better URL
          ticket_url: event["url"],
          venue_name: event["venue"]["name"],
          city: event["venue"]["city"],
          country: event["venue"]["country"],
          region: event["venue"]["region"],
          artist_id: @artist.id
        )
      end
      render json: @artist
    else
      #lets find the artist that already exists.... using the unique key that's already there
      artist = Artist.find_by({musicgraph_id: params["artist"]["musicgraph_id"]})
      render json: artist
     end

end

  def eventApi(band)
    encodedBand = URI::encode(band)
    eventSearched = 'https://rest.bandsintown.com/artists/' + encodedBand + '/events?app_id=discoversound'
    response = HTTParty.get(eventSearched)
    JSON.parse response.body
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :genre, :nationality, :years_active, :musicgraph_id, :spotify_id)
  end

end