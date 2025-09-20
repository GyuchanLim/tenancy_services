require "rails_helper"
require "tenancy_helper"

RSpec.describe Tenancy::Statistics::FetchBetween do
  let(:area) { "Bayview West" }
  let(:dwell) { ["House"] }
  let(:bedrooms) { ["4"] }
  let(:start_date) { "2025-01" }
  let(:end_date) { "2025-02" }
  before do
    # How can I separate this out to a model...?
    stub_request(:get,
                 "https://api.business.govt.nz/gateway/tenancy-services/market-rent/v2/statistics?area-definition=SAU2019&area-labels=Bayview%20West&dwelling-type=House&num-bedrooms=%5B%224%22%5D&num-months=1&period-ending=2025-02")
      .with(
        headers: {
          "Accept": "*/*",
          "Accept-Encoding": "gzip;q=1.0,deflate;q=0.6,identity;q=0.3",
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": "e4ae044f2b044800b86b8f747e20f903",
          "User-Agent": "Ruby",
        }
      ).to_return(
        status: 200,
        body: TenancyHelper.default_statistics_response(area, dwell, bedrooms, start_date, end_date),
        headers: {}
      )
  end

  context "when valid parameters are provided" do
    let(:client) { Api::Tenancy::Client.new }
    let(:params) {
      ActionController::Parameters.new(
        statistic:
          {
            "selectedLocation" => area,
            "selectedBedrooms" => bedrooms,
            "selectedDwellingType" => dwell,
            "selectedStartDate" => start_date,
            "selectedEndDate" => end_date,
          }
      )
    }

    let(:subject) { described_class.call(params) }

    it "returns a successful response" do
      expect(subject.body).to eq(TenancyHelper.default_statistics_response(area, dwell, bedrooms, start_date, end_date))
    end
  end
end
