class CreateUserPersonalRecommendations < ActiveRecord::Migration[6.1]
  def change
    create_table :user_personal_recommendations do |t|
      t.integer :user_id
      t.integer :personal_recommendation_id

      t.timestamps
    end
  end
end
