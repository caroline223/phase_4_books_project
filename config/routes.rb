Rails.application.routes.draw do
  
  resources :authors, only: [:index, :show]
  resources :user_books, only: [:index, :update, :destroy, :show]
  
  resources :books do 
    resources :user_books, only: [:create]
  end

  resources :users
  
  
  

  get "authors/books/:id", to: "authors#author_books"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  
  

end
