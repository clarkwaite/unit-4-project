class Artist < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
  validates :musicgraph_id, uniqueness: true
end

