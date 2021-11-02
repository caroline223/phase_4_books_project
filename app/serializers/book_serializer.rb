class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :author_id, :publishing_date, :rating, :image_url
  
  belongs_to :author 
  has_many :book_reviews

  # has_many :user_books
  # has_many :users, through: :user_books
  
end
