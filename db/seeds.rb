require 'faker'
Author.destroy_all
Book.destroy_all
BookReview.destroy_all
User.destroy_all
UserBook.destroy_all

30.times do
    Author.create(name: Faker::Name.name, 
                 birth_city: Faker::Address.city,
                 birth_state: Faker::Address.state,
                 birth_date: Faker::Date.backward(days: 30000),
                 college: Faker::Educator.university,
                 degree: Faker::Educator.degree,
                )
end

100.times do 
    id = Author.all.sample.id
    Book.create(title: Faker::Book.title, 
                genre: Faker::Book.genre, 
                publishing_date: Faker::Date.backward(days: 15000), 
                author_id: id,
                rating: Faker::Number.within(range: 1..10))

    5.times do
        id = Book.all.sample.id
             BookReview.create(
                review: Faker::Lorem.paragraph(sentence_count: 5),
                book_id: id
                )
        end

    end

     User.create(user_name: "Caroline", password: "chocolate")

     3.times do 
       book = Book.all.sample 
       User.first.user_books.create(book_id: book.id)
     end
