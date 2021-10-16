require 'faker'
Author.destroy_all
Book.destroy_all
BookReview.destroy_all

30.times do
    Author.create(name: Faker::Name.name, 
                 birth_city: Faker::Address.city,
                 birth_state: Faker::Address.state,
                 birth_date: Faker::Date.backward(days: 30000),
                 college: Faker::Educator.university,
                 degree: Faker::Educator.degree,
                )
end

200.times do 
    id = Author.all.sample.id
    Book.create(title: Faker::Book.title, 
                genre: Faker::Book.genre, 
                publishing_date: Faker::Date.backward(days: 15000), 
                author_id: id
                rating: Faker::Number.within(range: 1..10))
     
    5.times do
        BookReview.create(
            review: Faker::Hipster.sentences(number: 4)
        )
    end

end