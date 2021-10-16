class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :birth_city, :birth_state, :birth_date, :college, :degree, :image_url

  has_many :books 
end
