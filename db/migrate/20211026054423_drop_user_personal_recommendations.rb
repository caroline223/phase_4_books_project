class DropUserPersonalRecommendations < ActiveRecord::Migration[6.1]
  def change
    drop_table :user_personal_recommendations
  end
end
