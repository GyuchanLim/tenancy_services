require "rails_helper"

RSpec.describe TenancyServices::BondStatistics do
  let(:area_label) { create(:area_label) }
  context "validation" do
    it "fails to create an bond statistics without an area_label" do
      bond_statistics = described_class.new(area_label: nil, dwelling_type: 0, bedroom_count: 0)
      expect(bond_statistics).not_to be_valid
    end

    it "fails to create an bond statistics without a dwelling_type" do
      bond_statistics = described_class.new(area_label: area_label, dwelling_type: nil, bedroom_count: 0)
      expect(bond_statistics).not_to be_valid
    end

    it "fails to create an bond statistics without a bedroom_count" do
      bond_statistics = described_class.new(area_label: area_label, dwelling_type: 0, bedroom_count: nil)
      expect(bond_statistics).not_to be_valid
    end

    it "successfully creates a bond statistics with all required attributes" do
      bond_statistics = described_class.new(area_label: area_label, dwelling_type: 0, bedroom_count: 0)
      expect(bond_statistics).to be_valid
    end
  end
end
