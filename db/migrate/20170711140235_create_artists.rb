class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :nationality
      t.string :years_active
      t.string :genre
      t.string :musicgraph_id
      t.string :spotify_id

      t.timestamps
    end
  end
end
