Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # resources :groups, except: [:new, :edit]
  namespace :api do
  end
    resources :artists
    resources :events
  get 'home/index'
  root "home#index"
  
  
end