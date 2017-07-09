class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :genre, array:true, default: []
      t.string :website
      t.string :images, array:true, default: []
      t.string :spotify_href
      t.string :spotify_id

      t.timestamps
    end
  end
end
