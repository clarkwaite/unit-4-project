class AddStatesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :states, :string
  end
end
