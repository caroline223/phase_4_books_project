Rails.application.routes.draw do
  
  resources :authors, only: [:index, :show]
  resources :user_books, only: [:index, :update, :destroy]
  
  resources :books do 
    resources :user_books, only: [:create]
  end

  resources :users
  resources :book_reviews
  
  

  get "authors/books/:id", to: "authors#author_books"
  
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  
  

end
