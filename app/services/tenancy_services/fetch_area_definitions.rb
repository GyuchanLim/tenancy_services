module TenancyServices
  # This class fetches area definitions from the API.
  # Does not need to be called many times as the returned data is not changed frequently.
  class FetchAreaDefinitions < ApplicationService
    attr_reader :client

    def initialize
      @client = Api::Tenancy::Client.new
    end

    def call
      response = client.area_definitions

      Rails.logger.error("Failed to fetch area definitions") and return unless response.success?

      # If we need incorporate sidekiq. This can invoke jobs per item.
      # To create area definitions and to create area labels for that definition
      response["items"].each do |item|
        TenancyServices::AreaDefinition.find_or_create_by(label: item["label"], code: item["code"])
      end
    end
  end
end
