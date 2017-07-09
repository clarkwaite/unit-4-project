class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :venue
      t.string :city
      t.string :region
      t.string :country
      t.string :date
      t.string :lineup, array:true, default: []
      t.string :tickets_url

      t.timestamps
    end
  end
end
