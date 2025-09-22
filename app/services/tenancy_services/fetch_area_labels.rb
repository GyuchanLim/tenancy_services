module TenancyServices
  # This class fetches area labels from the API.
  # No need to be called multiple times. Same reasons as FetchAreaDefinitions.
  class FetchAreaLabels < ApplicationService
    attr_reader :client, :area_definition

    def initialize(client, area_definition)
      @client = client
      @area_definition = area_definition
    end

    def call
      response = client.area_definitions(area_definition.code)

      response["items"].each_slice(100) do |slice|
        # This can be put into a job.
        # Currently, run in a single thread.
        slice.each do |item|
          TenancyServices::AreaLabel.find_or_create_by(
            area_definition: area_definition,
            label: item["label"],
            code: item["code"]
          )
        end
      end
    end
  end
end
