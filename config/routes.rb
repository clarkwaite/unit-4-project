Rails.application.routes.draw do
  resources :events
  # get 'home/index'
  root "home#index"
  
  resources :artists
  
end
