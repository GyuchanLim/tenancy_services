module TenancyServices
  # This class fetches area labels from the API.
  # No need to be called multiple times. Same reasons as FetchAreaDefinitions.
  class FetchAreaLabels < ApplicationService
    attr_reader :area_definition

    def initialize(area_definition)
      @area_definition = area_definition
    end

    def call
      Rails.logger.error("Failed to fetch area labels for #{area_definition.label}") and return unless response.success?

      parsed_response["items"].each_slice(100) do |area_labels|
        process_area_labels(area_labels)
      end
    end

    private

    def client
      Api::Tenancy::Client.new
    end

    def response
      @response ||= client.area_definitions(area_definition.code)
    end

    def parsed_response
      JSON.parse(response.body)
    end

    def process_area_labels(area_labels)
      area_labels.each do |item|
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
end
