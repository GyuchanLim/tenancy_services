require "rails_helper"
require "tenancy_helper"

RSpec.describe Tenancy::Statistics::FetchBetween do
  context "when valid parameters are provided" do
    let(:start_date) { Date.today - 7.days }
    let(:end_date) { Date.today }
    let(:client) { Api::Tenancy::Client.new }
    let(:subject) { described_class.call(client: client, start_date: start_date, end_date: end_date) }

    before do
      allow(client).to receive(:statistic).and_return(TenancyHelper::DEFAULT_STATISTICS_RESPONSE)
    end

    it "returns a successful response" do
      expect(subject).to eq([TenancyHelper::DEFAULT_STATISTICS_RESPONSE])
    end
  end
end
