class CreateUserBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_books do |t|
      t.integer :user_id
      t.integer :book_id
      t.boolean :read
      t.string :book_review

      t.timestamps
    end
  end
end
