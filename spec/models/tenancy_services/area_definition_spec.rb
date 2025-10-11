require "rails_helper"

RSpec.describe TenancyServices::AreaDefinition do
  context "validation" do
    it "fails to create an area definition without label" do
      area_definition = described_class.new(label: nil, code: "REGC2019")
      expect(area_definition).not_to be_valid
    end
    it "fails to create an area definition without code" do
      area_definition = described_class.new(label: "regional-council-2019", code: nil)
      expect(area_definition).not_to be_valid
    end

    it "successfully creates an area definition with all required attributes" do
      area_definition = described_class.new(label: "regional-council-2019", code: "REGC2019")
      expect(area_definition).to be_valid
    end
  end
end
