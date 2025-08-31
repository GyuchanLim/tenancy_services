module Tenancy
  module Statistics
    # Class to fetch statistics between two dates
    class FetchBetween < ApplicationService
      def initialize(client:, query:)
        @client = client
        @query = query
      end

      attr_reader :client, :query

      def call
        # Implementation goes here
        client.statistic(query)
      end
    end
  end
end
