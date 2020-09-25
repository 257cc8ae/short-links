Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/:id' => "shortener/shortened_urls#show"
  root to: "pages#index"
end
