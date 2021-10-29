class UserBookSerializer < ActiveModel::Serializer
  attributes :id, :read, :consider

  belongs_to :book
  
end
