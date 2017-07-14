class Artist < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  has_many :events, dependent: :destroy
  validates :musicgraph_id, uniqueness: true

end #closed model