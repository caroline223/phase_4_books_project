class AddGenreToPersonalBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :personal_books, :genre, :string
  end
end
