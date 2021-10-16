class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :birth_city
      t.string :birth_state
      t.date :birth_date
      t.string :college
      t.string :degree
      t.string :image_url

      t.timestamps
    end
  end
end
