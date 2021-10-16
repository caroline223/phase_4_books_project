class BookReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :book_id

  belongs_to :book 
end
