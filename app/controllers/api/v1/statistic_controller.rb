module Api
  module V1
    # This is a controller for handling statistic-related API requests.
    class StatisticController < ApiController
      def search
        statistic = ::Tenancy::Statistics::FetchBetween.new(client: client, query: statistic_params_hash).call

        puts(statistic_params_hash)
        render json: { data: statistic }
      end

      private

      def statistic_params_hash
        params.require(:statistic).permit(
          :selectedLocation,
          :selectedStartDate,
          :selectedEndDate,
          selectedBedrooms: [],
          selectedDwellingType: []
        )

        {
          "area-labels": params[:selectedLocation],
          "num-bedrooms": params[:selectedBedrooms],
          "dwelling-type": params[:selectedDwellingType].join(","),
          "period-ending": params[:selectedEndDate],
          "num-months": num_months,
          "area-definition": "SAU2019",
        }
      end

      def num_months
        ((end_date.year - start_date.year) * 12) + end_date.month - start_date.month
      end

      def start_date
        Date.strptime(params[:selectedStartDate], "%Y-%m")
      end

      def end_date
        Date.strptime(params[:selectedEndDate], "%Y-%m")
      end

      def client
        @client ||= Api::Tenancy::Client.new
      end
    end
  end
end
