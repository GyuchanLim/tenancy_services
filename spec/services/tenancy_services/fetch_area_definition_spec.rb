require "rails_helper"
require "spec_helper"
require "tenancy_helper"

RSpec.describe TenancyServices::FetchAreaDefinitions do
  subject { described_class.call }

  before do
    ActiveJob::Base.queue_adapter = :test

    allow_any_instance_of(Api::Tenancy::Client).to receive(:area_definitions).and_return(response)
  end

  context "#call" do
    let(:response) do
      instance_double(
        HTTParty::Response,
        success?: true,
        body: TenancyHelper.default_area_definitions_response
      )
    end

    it "returns the area definitions" do
      expect { subject }.to change { TenancyServices::AreaDefinition.count }
        .from(0).to(JSON.parse(TenancyHelper.default_area_definitions_response)["items"].count)
    end

    it "queues FetchAreaLabelsJob for each area definition created" do
      expect { subject }.to have_enqueued_job(FetchAreaLabelsJob)
        .exactly(JSON.parse(TenancyHelper.default_area_definitions_response)["items"].count).times
    end
  end
end
