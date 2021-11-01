class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email
  
  has_many :user_books
  has_many :books, though: :user_books
end
