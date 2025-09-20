class TenancyHelper
  # rubocop:disable Metrics/MethodLength
  def self.default_statistics_response(area, dwell, n_bedrooms, start_date, end_date)
    {
      "items": [
        {
          "area": area,
          "dwell": dwell,
          "nBedrms": n_bedrooms,
          "nLodged": 6,
          "nClosed": 6,
          "nCurr": nil,
          "mean": 543,
          "lq": 463,
          "med": nil,
          "uq": nil,
          "sd": 181,
          "brr": nil,
          "lmean": nil,
          "lsd": nil,
          "slq": nil,
          "suq": nil,
        },
      ], "periodCovered": "#{start_date}/#{end_date}", "areaDefinition": "SAU2019",
    }.to_json
  end
  # rubocop:enable Metrics/MethodLength
end
