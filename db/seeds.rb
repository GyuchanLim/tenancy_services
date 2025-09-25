# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#
# Calling TenancyServices::FetchAreaDefinitions.call will populate all area_definitions and area_labels tables directly from the API.
# Based on regional-council-2019 from API
TenancyServices::AreaDefinition.create(label: "regional-council-2019", code: "REGC2019")

area_definition = TenancyServices::AreaDefinition.first

TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Northland Region", code: "01")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Auckland Region", code: "02")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Waikato Region", code: "03")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Bay of Plenty Region", code: "04")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Gisborne Region", code: "05")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Hawke's Bay Region", code: "06")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Taranaki Region", code: "07")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Manawatu-Wanganui Region", code: "08")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Wellington Region", code: "09")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "West Coast Region", code: "12")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Canterbury Region", code: "13")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Otago Region", code: "14")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Southland Region", code: "15")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Tasman Region", code: "16")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Nelson Region", code: "17")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Marlborough Region", code: "18")
TenancyServices::AreaLabel.create(area_definition: area_definition, label: "Area Outside Region", code: "99")
