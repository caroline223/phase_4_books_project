class Book < ApplicationRecord
    has_many :book_reviews
    belongs_to :author
end
