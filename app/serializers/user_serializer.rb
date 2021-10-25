class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email_address, :user_name, :password
  
  has_one :personal_book 
  has_one :personal_recommendation
end
