module TenancyServices
  # Area Labels Table
  class AreaLabel < ApplicationRecord
    belongs_to :area_definition, class_name: "TenancyServices::AreaDefinition"
    has_many :bond_statistics, class_name: "TenancyServices::BondStatistics"

    validates :label, presence: true
    validates :code, presence: true
  end
end
