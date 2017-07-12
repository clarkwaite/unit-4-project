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
end

