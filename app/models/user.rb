class User < ApplicationRecord
    has_secure_password
    
    has_many :user_books
    has_many :books, through: :user_books

    validates :email, presence: true, uniqueness: true, allow_blank: false
    validates :username, presence: true, uniqueness: true, length: { in: 6..30 }
    validates :password, presence: true, length: { in: 6..20 }
end
