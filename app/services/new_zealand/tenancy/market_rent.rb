module NewZealand
  module Tenancy
    class MarketRent
      def initialize
        @uri = ENV["TENANCY_MARKET_RENT_URI"]
        @auth = {
          "Content-Type" => "application/json",
          "Cache-Control" => "no-cache",
          "Ocp-Apim-Subscription-Key": ENV["TENANCY_MARKET_RENT_PRIMARY_KEY"]
        }
      end

      def call
        Api::NewZealand::Client.new(@uri, @auth)
      end
    end
  end
end
