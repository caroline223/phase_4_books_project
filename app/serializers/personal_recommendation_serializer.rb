class PersonalRecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :publishing_date, :rating, :review
  belongs_to :user 
end
