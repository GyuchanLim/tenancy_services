FactoryBot.define do
  factory :area_definition, class: "TenancyServices::AreaDefinition" do
    label { Faker::Address.city }
    code { Faker::Address.zip_code }
  end
end
