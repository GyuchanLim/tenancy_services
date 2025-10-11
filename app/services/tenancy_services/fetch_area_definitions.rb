module TenancyServices
  # This class fetches area definitions from the API.
  # Does not need to be called many times as the returned data is not changed frequently.
  class FetchAreaDefinitions < ApplicationService
    def call
      Rails.logger.error("Failed to fetch area definitions") and return unless response.success?

      parsed_response["items"].each do |item|
        area_definition = TenancyServices::AreaDefinition.create(label: item["label"], code: item["code"])

        FetchAreaLabelsJob.perform_later(area_definition) if area_definition.save
      rescue TenancyServicesApiError => e
        Rails.logger.error("Error creating area label for area_definition: #{area_definition.label}. #{e.message}")
      end
    end

    def client
      @client ||= Api::Tenancy::Client.new
    end

    def response
      @response ||= client.area_definitions
    end

    def parsed_response
      JSON.parse(response.body)
    end
  end
end
