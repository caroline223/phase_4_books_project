class PersonalBooksController < ApplicationController

        def index 
        personal_books = PersonalBook.all 
        render json: personal_books
    end

    def create 
        personal_book = PersonalBook.create(personal_book_params)
        render json: personal_book 
    end

    def update
    end

    def destroy
        personal_book = find_personal_book
        personal_book.destroy 
    end

    private 

    def find_personal_book
        PersonalBook.find(params[:id])
    end

    def personal_book_params
       params.require(:personal_book).permit(:title, :author,:genre, :publishing_date, :rating, :review)
    end
    
end
