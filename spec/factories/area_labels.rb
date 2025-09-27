FactoryBot.define do
  factory :area_label, class: "TenancyServices::AreaLabel" do
    area_definition { create(:area_definition) }
    label { Faker::Address.city }
    code { Faker::Address.zip_code }
  end
end
