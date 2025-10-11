module TenancyServices
  # This class fetches area definitions from the API.
  # Does not need to be called many times as the returned data is not changed frequently.
  class FetchAreaDefinitions < ApplicationService
    def call
      response = client.area_definitions
      Rails.logger.error("Failed to fetch area definitions") and return unless response.success?

      response["items"].each do |item|
        area_definition = TenancyServices::AreaDefinition.create(label: item["label"], code: item["code"])

        FetchAreaLabelsJob.perform_later(area_definition) if area_definition.save
      end
    end

    def client
      @client ||= Api::Tenancy::Client.new
    end
  end
end
