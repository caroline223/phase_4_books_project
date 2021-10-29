class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password_digest
  
  has_many :user_books
  has_many :books, though: :user_books
end
