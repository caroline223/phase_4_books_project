class AddReadColumnToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :read, :boolean, default: false
  end
end
