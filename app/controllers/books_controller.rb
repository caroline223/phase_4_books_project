class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books, status: :created
        
    end

    def show 
        book = find_book
        render json: book
    end

    private

    def find_book
        book = Book.find(params[:id])
    end

    def book_params
        params.require(:book).permit(:title, :author_id, :genre, :rating, :image_url)
    end
  

end
