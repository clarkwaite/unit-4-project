Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # resources :groups, except: [:new, :edit]
  root "home#index"
  resources :artists
  resources :events
  get 'home/index'
  get "users/:userId/favorites", to: "favorites#index", as: "favorites"
  get "users/:userId", to: "users#show", as: "user_show"
  post "/favorites", to: "favorites#new", as: "new_favorites"
  get "users/:userId/artists/:artistId/related_artists", to: "related_artists#index", as: "related_artists"
  delete "users/:user_id/favorites/:artist_id", to: "favorites#destroy"

  
  # namespace :api do
  # end
  
end