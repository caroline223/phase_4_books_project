class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books 
    end

    
    def show 
        book = find_book
        render json: book
    end

   
    private

    def find_book
        Book.find(params[:id])
    end

    

    

end
