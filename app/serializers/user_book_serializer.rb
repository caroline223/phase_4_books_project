class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :read, :consider, :book_id, :user_id

  belongs_to :book
  
end
