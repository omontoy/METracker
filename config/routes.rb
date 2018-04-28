Rails.application.routes.draw do
  root 'admin/mapas#index'

  devise_for :users

  namespace :admin do
  	resources :mapas, only: [:index] do
  		get 'completo', on: :collection
  		get 'especifico', on: :collection
  	end
  end
end
