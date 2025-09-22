module TenancyServices
  # Area Definition Table
  class AreaDefinition < ApplicationRecord
    has_many :area_labels, dependent: :destroy

    validates :label, presence: true
    validates :code, presence: true
  end
end
