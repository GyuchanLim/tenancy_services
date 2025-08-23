module Tenancy
  class FetchRegions
    attr_reader :client

    def initialize
      @client = Api::Tenancy::Client.new
    end

    def call
      # Think about what area definitions to use, can we use multiple here?
      data = client.area_definitions("IMR2017")
      return error_response unless data.success?

      format(data["items"])
    end

    private

    def format(rows)
      regions_hash = {}

      rows.each do |row|
        area, regions = row["label"].downcase.split(" - ")
        if regions_hash[area]
          regions_hash[area].concat(regions.split("/"))
        else
          regions_hash[area] = regions.split("/")
        end
      end

      regions_hash
    end
  end
end
