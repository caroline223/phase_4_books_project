class CreateUserPersonalBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_personal_books do |t|
      t.integer :user_id
      t.integer :personal_book_id

      t.timestamps
    end
  end
end
