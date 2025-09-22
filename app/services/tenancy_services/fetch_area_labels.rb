module TenancyServices
  # This class fetches area labels from the API.
  # No need to be called multiple times. Same reasons as FetchAreaDefinitions.
  class FetchAreaLabels < ApplicationService
    attr_reader :area_definition_id

    def initialize(area_definition_id)
      @area_definition_id = area_definition_id
    end

    def call
      response = client.area_definitions(area_definition.code)

      response["items"].each_slice(100) do |batch|
        batch.each do |item|
          TenancyServices::AreaLabel.find_or_create_by(
            area_definition: area_definition,
            label: item["label"],
            code: item["code"]
          )
        rescue TenancyServicesApiError => e
          Rails.logger.error("Error creating area label for area_definition: #{area_definition.label}. #{e.message}")
        end
      end
    end

    private

    def client
      Api::Tenancy::Client.new
    end

    def area_definition
      TenancyServices::AreaDefinition.find(area_definition_id)
    end
  end
end
