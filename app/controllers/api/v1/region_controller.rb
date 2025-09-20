module Api
  module V1
    # This is RegionController Method Description
    class RegionController < ApiController
      before_action :fetch_regions, only: [:index, :suburb]

      def index
        render json: { data: fetch_regions.keys }
      end

      def suburb
        region = params[:id]

        render json: error_response and return if fetch_regions[region].nil?

        render json: { data: fetch_regions[region] }
      end

      private

      def fetch_regions
        @fetch_regions ||= Tenancy::FetchRegions.new.call
      end

      def error_response
        {
          "404": {
            "description": "Unable to find results for a given region.",
          },
        }
      end
    end
  end
end
