# This is a ruby script that I sent to ask about a bug where calling a area-labels fails to return data
# But area-code is successful
require "httparty"

# Makes calls to the Tenancy Market Rent API
class Client
  include HTTParty

  base_uri "https://api.business.govt.nz/gateway"

  def initialize
    @uri = "/tenancy-services/market-rent/v2"
    @auth = {
      "Content-Type" => "application/json",
      "Cache-Control" => "no-cache",
      # Switch this with your API key
      "Ocp-Apim-Subscription-Key": ENV["TENANCY_MARKET_RENT_PRIMARY_KEY"],
    }
  end

  def statistics(query)
    self.class.get("#{@uri}/statistics?#{format_simple_query(query)}", headers: @auth)
  end

  def format_simple_query(query)
    query.map { |k, v| "#{k}=#{v}" }.join("&")
  end
end

# Statistic params
statistics_param_hashes = [
  # This param uses area-labels and fails to fetch data
  {
    "area-labels": "Northland Region",
    "num-bedrooms": "1",
    "period-ending": "2025-06",
    "num-months": "12",
    "area-definition": "REGC2019",
    "dwelling-type": "House",
    "statistics": "nLodged, nClosed",
  },
  # This param uses area-codes and successfully fetches data
  {
    "area-codes": "01",
    "num-bedrooms": "1",
    "period-ending": "2025-06",
    "num-months": "12",
    "area-definition": "REGC2019",
    "dwelling-type": "House",
    "statistics": "nLodged, nClosed",
  },
  # This param uses area-labels and successfully fetches data
  {
    "area-labels": "Bayview West",
    "num-bedrooms": "3",
    "period-ending": "2025-06",
    "num-months": "12",
    "area-definition": "SAU2019",
    "dwelling-type": "House",
    "statistics": "nLodged, nClosed",
  },
  # This param uses area-codes and successfully fetches data
  {
    "area-codes": "121400",
    "num-bedrooms": "3",
    "period-ending": "2025-06",
    "num-months": "12",
    "area-definition": "SAU2019",
    "dwelling-type": "House",
    "statistics": "nLodged, nClosed",
  },
]

statistics_param_hashes.each do |params|
  results = Client.new.statistics(params)

  puts "==============================="
  puts "Query params"
  pp params
  puts "==============================="
  puts "Results"
  pp results
  puts ""
end

# For REGC2019 ...
# "REGC2016": [
#   {
#     "label": "Northland Region",
#     "code": "1"
#   },
#   ...

# ===============================
# Query params
# {"area-labels": "Northland Region",
#  "num-bedrooms": "1",
#  "period-ending": "2025-06",
#  "num-months": "12",
#  "area-definition": "REGC2019",
#  "dwelling-type": "House",
#  statistics: "nLodged, nClosed"}
# ===============================
# Results
# {"items" => [], "periodCovered" => "2024-7-1/2025-6-30", "areaDefinition" => "REGC2019"}

# ===============================
# Query params
# {"area-codes": "01", "num-bedrooms": "1", "period-ending": "2025-06", "num-months": "12", "area-definition": "REGC2019", "dwelling-type": "House", statistics: "nLodged, nClosed"}
# ===============================
# Results
# {"items" =>
#   [{"area" => "Northland Region",
#     "dwell" => "House",
#     "nBedrms" => "1",
#     "nLodged" => 129,
#     "nClosed" => 96,
#     "nCurr" => nil,
#     "mean" => 426,
#     "lq" => 350,
#     "med" => nil,
#     "uq" => nil,
#     "sd" => 372,
#     "brr" => nil,
#     "lmean" => nil,
#     "lsd" => nil,
#     "slq" => nil,
#     "suq" => nil}],
#  "periodCovered" => "2024-7-1/2025-6-30",
#  "areaDefinition" => "REGC2019"}

# For SAU2019 ...
#     {
#       "label": "Bayview West",
#       "code": "121400"
#     },
#     ...
# ===============================
# Query params
# {"area-labels": "Bayview West", "num-bedrooms": "3", "period-ending": "2025-06", "num-months": "12", "area-definition": "SAU2019", "dwelling-type": "House", statistics: "nLodged, nClosed"}
# ===============================
# Results
# {"items" =>
#   [{"area" => "Bayview West",
#     "dwell" => "House",
#     "nBedrms" => "3",
#     "nLodged" => 18,
#     "nClosed" => 24,
#     "nCurr" => nil,
#     "mean" => 687,
#     "lq" => 658,
#     "med" => nil,
#     "uq" => nil,
#     "sd" => 94,
#     "brr" => nil,
#     "lmean" => nil,
#     "lsd" => nil,
#     "slq" => nil,
#     "suq" => nil}],
#  "periodCovered" => "2024-7-1/2025-6-30",
#  "areaDefinition" => "SAU2019"}

# ===============================
# Query params
# {"area-codes": "121400", "num-bedrooms": "3", "period-ending": "2025-06", "num-months": "12", "area-definition": "SAU2019", "dwelling-type": "House", statistics: "nLodged, nClosed"}
# ===============================
# Results
# {"items" =>
#   [{"area" => "Bayview West",
#     "dwell" => "House",
#     "nBedrms" => "3",
#     "nLodged" => 18,
#     "nClosed" => 24,
#     "nCurr" => nil,
#     "mean" => 687,
#     "lq" => 658,
#     "med" => nil,
#     "uq" => nil,
#     "sd" => 94,
#     "brr" => nil,
#     "lmean" => nil,
#     "lsd" => nil,
#     "slq" => nil,
#     "suq" => nil}],
#  "periodCovered" => "2024-7-1/2025-6-30",
#  "areaDefinition" => "SAU2019"}
