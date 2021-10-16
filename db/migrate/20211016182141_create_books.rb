class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.integer :author_id
      t.date :publishing_date
      t.integer :rating
      t.string :image_url
     
    

      t.timestamps
    end
  end
end
