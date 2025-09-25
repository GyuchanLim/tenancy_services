module TenancyServices
  # Bond Statistics Table
  class BondStatistics < ApplicationRecord
    self.table_name = "bond_statistics"

    belongs_to :area_label

    # Stupid colon
    enum :dwelling_type, {
      apartment: 0,
      boarding_house: 1,
      flat: 2,
      house: 3,
      room: 4,
    }, validate: true

    enum :bedroom_count, {
      na: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five_plus: 5,
    }, validate: true
  end
end
