class DropPersonalLibraries < ActiveRecord::Migration[6.1]
  def change
    drop_table :personal_libraries 
  end
end
