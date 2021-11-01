class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

   before_action :authorize

  # def current_user
  #   User.first
  # end
   
  private 

  
   def authorize
    # current_user
    @current_user = User.find_by_id(session[:user_id])
     render json: { error: ["User not authorized"] }, status: :unauthorized unless @current_user
   end

  # def render_unprocessable_entity_response(exception)
  #   render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity 
  # end



end
