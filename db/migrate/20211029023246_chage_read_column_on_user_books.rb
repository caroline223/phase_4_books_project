class ChageReadColumnOnUserBooks < ActiveRecord::Migration[6.1]
  def change
    change_column :user_books, :read, :boolean, default: false
  end
end
