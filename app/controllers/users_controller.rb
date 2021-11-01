class UsersController < ApplicationController

    skip_before_action :authorize, only: :create 

    def index
       render json: User.all, status: :ok
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

   def show
        if @current_user
            render json: @current_user, include: :books
        else
            render json: {}, status: :unauthorized
        end
   end

    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation, :email)
    end

end
