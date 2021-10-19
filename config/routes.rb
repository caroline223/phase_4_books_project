Rails.application.routes.draw do
  
  resources :book_reviews
  resources :authors
  resources :books

  get "authors/books/:id", to: "authors#author_books"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  
  

end
