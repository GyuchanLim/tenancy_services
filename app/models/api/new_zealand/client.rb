module Api
  module NewZealand
    class Client
      include HTTParty
      base_uri "https://api.business.govt.nz/#{ENV["API_ENVIRONMENT"]}"

      def initialize(uri, auth)
        @uri = uri
        @auth = auth
      end

      def area_definitions(area = nil)
        return self.class.get("#{@uri}/area-definitions", headers: @auth) if area.nil?

        self.class.get("#{@uri}/area-definitions/#{area}", headers: @auth)
      end

      def statistics(query)
        self.class.get("#{@uri}/statistics?#{format_simple_query(query)}", headers: @auth)
      end

      private

      def format_simple_query(query)
        query_string = query.map { |k, v| "#{k}=#{v}" }.join("&")
      end
    end
  end
end
