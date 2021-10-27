class DropPersonalRecommendations < ActiveRecord::Migration[6.1]
  def change
    drop_table :personal_recommendations
  end
end
