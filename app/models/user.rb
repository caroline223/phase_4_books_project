class User < ApplicationRecord
    has_secure_password
    
    has_many :user_personal_books 
    has_many :personal_books, through: :user_personal_books
end
