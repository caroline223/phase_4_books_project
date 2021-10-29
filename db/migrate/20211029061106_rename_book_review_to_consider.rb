class RenameBookReviewToConsider < ActiveRecord::Migration[6.1]
  def change
    rename_column :user_books, :book_review, :consider
  end
end
