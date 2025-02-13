# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # regular expressions can be used here
    origins "http://localhost:5173"

    # you can put if statements here to make it work like ruby
    resource "/api/*", # * <- everything
      headers: :any,  # :headers => 'x-domain-token'
      methods: [:get] # :post, :put, :patch, :delete, :options, :head
  end
end
