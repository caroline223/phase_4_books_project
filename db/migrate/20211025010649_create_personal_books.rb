class CreatePersonalBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :personal_books do |t|
      t.string :title
      t.string :author
      t.date :publishing_date
      t.integer :rating
      t.string :review

      t.timestamps
    end
  end
end
