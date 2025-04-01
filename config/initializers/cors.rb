# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Use different origins for development and production
    origins = if Rails.env.production?
                # Replace with your production frontend URL
                [ "https://soom-gyeol.com",
                  "https://www.soom-gyeol.com",
                  "https://170.64.173.251" ]
    else
                # Development frontend URL
                [ "http://localhost:5173" ]
    end

    # Allow API requests from the specified origins
    origins(*origins)

    # you can put if statements here to make it work like ruby
    # Allow all headers and common HTTP methods
    resource "/api/*", # * <- everything
      headers: :any,
      methods: [ :get, :post ] # :post, :put, :patch, :delete, :options, :head
  end
end
