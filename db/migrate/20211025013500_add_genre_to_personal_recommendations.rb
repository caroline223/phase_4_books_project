class AddGenreToPersonalRecommendations < ActiveRecord::Migration[6.1]
  def change
    add_column :personal_recommendations, :genre, :string
  end
end
