json.extract! event, :id, :venue, :city, :region, :country, :date, :lineup, :tickets_url, :created_at, :updated_at
json.url event_url(event, format: :json)
