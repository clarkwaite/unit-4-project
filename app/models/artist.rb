class Artist < ApplicationRecord
  # include HTTParty
  # base_uri 'http://swapi.co/api/people'

  # def self.generate(api_id)
  #   star_war = find_by api_id: api_id
  #   return star_war unless star_war.nil?

  #   response = get "/#{api_id}"
  #   placeholder_image = "https://www.placecage.com/c/#{200 + api_id}/#{200 + api_id}"

  #   create!(name: response['name'],
  #           image: placeholder_image,
  #           wins: 0, 
  #           api_id: api_id)
  # end
end
