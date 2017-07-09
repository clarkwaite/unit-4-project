require 'net/http'

class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    # @events = Event.all
    def say_hi
    puts "testing "
      end

    def another_api(band)
    eventSearched =  'https://rest.bandsintown.com/artists/' + band + '/events?app_id=discoversound'
    response = HTTParty.get(eventSearched)
    render json: response.body
    end
    another_api(params[:artist])
    # puts "params are :  " + params[:artist]
  
  end

  # GET /events/1
  # GET /events/1.json
  def show
   
    # def another_api(@event)
    puts "@event is : " + @event
    # eventSearched =  'https://rest.bandsintown.com/artists/' + @event + '/events?app_id=discoversound'
    # response = HTTParty.get(eventSearched)
    # render json: response.body
    # end
    # another_api()
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params)

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @event }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:venue, :city, :region, :country, :date, :lineup, :tickets_url)
    end
end
