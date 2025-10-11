require "rails_helper"
require "spec_helper"
require "tenancy_helper"

RSpec.describe TenancyServices::FetchAreaLabels do
  let(:area_definition) { create(:area_definition) }

  subject { described_class.call(area_definition) }

  before do
    ActiveJob::Base.queue_adapter = :test

    allow_any_instance_of(Api::Tenancy::Client).to receive(:area_definitions)
      .with(area_definition.code)
      .and_return(response)
  end

  context "#call" do
    let(:response) do
      instance_double(
        HTTParty::Response,
        success?: true,
        body: TenancyHelper.custom_area_definitions_response(area_definition.code)
      )
    end

    it "returns the area labels" do
      expect { subject }.to change { TenancyServices::AreaLabel.count }.from(0)
    end
  end
end
