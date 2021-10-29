class DropConsiderFromUserBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :user_books, :consider
  end
end
