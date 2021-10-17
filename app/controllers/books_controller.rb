class BooksController < ApplicationController

    def index
        books = Book.all.map do |book|
            { 
                id: book.id,
                title: book.title,
                genre: book.genre,
                author_name: book.author.name,
                publishing_date: book.publishing_date,
                rating: book.rating,
                image_url: book.image_url,
                author_id: book.author_id, 
            }
        end 
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
