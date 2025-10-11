require "rails_helper"

RSpec.describe TenancyServices::AreaLabel do
  let!(:area_definition) { create(:area_definition) }

  context "validation" do
    it "fails to create an area label without an area definition" do
      area_label = described_class.new(area_definition: nil, label: "regional-council-2019", code: "REGC2019")
      expect(area_label).not_to be_valid
    end

    it "fails to create an area label without label" do
      area_label = described_class.new(area_definition: area_definition, label: nil, code: "REGC2019")
      expect(area_label).not_to be_valid
    end
    it "fails to create an area label without code" do
      area_label = described_class.new(area_definition: area_definition, label: "regional-council-2019", code: nil)
      expect(area_label).not_to be_valid
    end

    it "successfully creates an area label with all required attributes" do
      area_label = described_class.new(
        area_definition: area_definition,
        label: "regional-council-2019",
        code: "REGC2019"
      )
      expect(area_label).to be_valid
    end
  end
end
