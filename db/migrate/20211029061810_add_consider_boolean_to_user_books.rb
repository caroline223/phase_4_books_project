class AddConsiderBooleanToUserBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :user_books, :consider, :boolean, default: false
  end
end
