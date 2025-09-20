client = Api::Tenancy::Client.new

statistic_params_hash = {
  "area-labels": "Bayview West",
  "num-bedrooms": "1,3",
  "dwelling-type": "House, Flat",
}

body = statistic_params_hash.merge({
                                     "period-ending": "2024-12",
                                     "num-months": 20,
                                     "area-definition": "SAU2019",
                                     "statistics": "nLodged, nClosed",
                                   })

result = client.statistics(body)

puts result
