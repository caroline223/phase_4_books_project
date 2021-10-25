class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users 
    end

    def show 
        user = find_user
        render json: user 
    end


    private

    def find_user
        User.find_by(id: session[:id])
    end


end
