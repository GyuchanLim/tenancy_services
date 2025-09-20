module Tenancy
  module Statistics
    # Class to fetch statistics between two dates
    class FetchBetween < ApplicationService
      def initialize(params)
        @params = params
      end

      attr_reader :params

      def call
        client.statistics(request_body)
      end

      def request_body
        {
          "area-labels": statistics_params[:selectedLocation],
          "num-bedrooms": statistics_params[:selectedBedrooms],
          "dwelling-type": statistics_params[:selectedDwellingType].join(","),
          "period-ending": statistics_params[:selectedEndDate],
          "num-months": num_months,
          "area-definition": "SAU2019",
        }
      end

      def statistics_params
        # Need to find out why it's statistic, not statistics
        params.require(:statistic).permit(
          :selectedLocation,
          :selectedStartDate,
          :selectedEndDate,
          selectedBedrooms: [],
          selectedDwellingType: []
        )

        params[:statistic]
      end

      def num_months
        ((end_date.year - start_date.year) * 12) + end_date.month - start_date.month
      end

      def start_date
        Date.strptime(statistics_params[:selectedStartDate], "%Y-%m")
      end

      def end_date
        Date.strptime(statistics_params[:selectedEndDate], "%Y-%m")
      end

      def client
        @client ||= Api::Tenancy::Client.new
      end
    end
  end
end
