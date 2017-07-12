class Artist < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :musicgraph_id, uniqueness: true
  after_initialize :init

    def init
    self.name ||= 'Data Unavailable'
    self.nationality ||= 'Data Unavailable'
    self.years_active ||= 'Data Unavailable'
    self.genre ||= 'Data Unavailable'
    self.musicgraph_id ||= 'Data Unavailable'
    self.spotify_id ||= 'Data Unavailable'
       
    end

    






end #closed model

# RSpotify.authenticate("1112213d67ce43cd8518c656425e6cb7", "055492756bd04666b62fa7bda863a53b")