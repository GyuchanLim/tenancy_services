module Api
  module V1
    # This is a controller for handling statistic-related API requests.
    class StatisticsController < ApiController
      def search
        # NO BUSINESS LOGIC IN CONTROLLERS.
        render json: { data: ::TenancyServices::FetchBetween.call(params) }
      end
    end
  end
end
