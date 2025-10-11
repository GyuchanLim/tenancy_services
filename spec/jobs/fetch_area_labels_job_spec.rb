require "rails_helper"
require "tenancy_helper"

RSpec.describe FetchAreaLabelsJob do
  include ActiveJob::TestHelper

  let(:area_definition) { create(:area_definition) }

  subject { described_class.perform_later(area_definition) }

  before { ActiveJob::Base.queue_adapter = :test }

  describe "#perform" do
    before do
      allow_any_instance_of(Api::Tenancy::Client).to receive(:area_definitions)
        .and_return(JSON.parse(TenancyHelper.default_area_definitions_response))
    end

    it "queues FetchAreaLabelsJob service" do
      subject

      assert_enqueued_with(job: FetchAreaLabelsJob)
      expect { perform_enqueued_jobs(only: FetchAreaLabelsJob) }
        .to change { TenancyServices::AreaLabel.count }.from(0)
    end
  end
end
