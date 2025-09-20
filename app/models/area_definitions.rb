# Area Definition Table
class AreaDefinition < ApplicationRecord
  validates :label, presence: true
  validates :code, presence: true
end
