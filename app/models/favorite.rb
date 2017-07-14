class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :artist
  validates :id, uniqueness: true
end
