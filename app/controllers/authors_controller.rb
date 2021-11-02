class AuthorsController < ApplicationController

    def index 
        authors = Author.all 
        render json: authors 
    end

    
    def show 
        author = find_author 
        render json: author
    end

    def author_books
        author = find_author
        author_books = find_author.books.map do |book|
            {
                title: book.title,
                genre: book.genre,
                publishing_date: book.publishing_date,
                rating: book.rating,
            }
            
        end
        render json: author_books
    end

    


    private

    def find_author
        Author.find_by_id(params[:id])
    end

end
