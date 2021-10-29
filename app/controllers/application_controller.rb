class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

  
   private 

  def current_user
    User.first
  end

  # def authorize
  #   @current_user = User.find_by(id: session[:user_id])
  #   render json: {errors: ["User not authorized"]}, status: :unauthorized unless @current_user
  # end

  # def render_unprocessable_entity_response
  #   render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity 
  # end



end
