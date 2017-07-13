class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :date
      t.string :lineup, :string, array:true
      t.string :ticket_url
      t.string :venue_name
      t.string :city
      t.string :country
      t.string :region

      t.timestamps
    end
  end
end
