class PersonalBookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publishing_date, :rating, :review, :genre
   
end
