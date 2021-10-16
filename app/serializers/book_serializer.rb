class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :author_id, :publishing_date, :rating, :image_url
  has_many :book_reviews
  belongs_to :author 
end
