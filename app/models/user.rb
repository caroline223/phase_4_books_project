class User < ApplicationRecord
    has_secure_password
    
    has_many :user_books
    has_many :books, through: :user_books

    validates :email, uniqueness: true, allow_blank: false
    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true
end
