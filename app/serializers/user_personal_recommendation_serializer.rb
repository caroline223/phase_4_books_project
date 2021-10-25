class UserPersonalRecommendationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :personal_recommendation_id
end
