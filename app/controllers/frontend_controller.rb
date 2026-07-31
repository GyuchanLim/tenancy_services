class FrontendController < ActionController::Base
  def index
    render file: Rails.root.join("public/index.html"), layout: false, content_type: "text/html"
  end
end
