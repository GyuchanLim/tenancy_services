FactoryBot.define do
  factory :bond_statistics, class: "TenancyServices::BondStatistics" do
    area_label { create(:area_label) }
    dwelling_type { 0 }
    bedroom_count { 0 }
    n_lodged { nil }
    n_closed { nil }
    n_curr { nil }
    mean { nil }
    lq { nil }
    med { nil }
    uq { nil }
    sd { nil }
    brr { nil }
    lmean { nil }
    lsd { nil }
    suq { nil }
    slq { nil }
  end
end
