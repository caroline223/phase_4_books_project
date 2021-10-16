class CreateBookReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :book_reviews do |t|
      t.string :review
      t.integer :book_id


      t.timestamps
    end
  end
end
