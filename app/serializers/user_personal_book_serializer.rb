class UserPersonalBookSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :personal_book_id
end
