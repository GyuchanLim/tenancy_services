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

  def self.default_area_definitions_response(_area_code = nil)
    { "tableName": "REGC2016",
      "items":
      [
        { "label": "Northland Region", "code": "1" },
        { "label": "West Coast Region", "code": "12" },
        { "label": "Canterbury Region", "code": "13" },
        { "label": "Otago Region", "code": "14" },
        { "label": "Southland Region", "code": "15" },
        { "label": "Tasman Region", "code": "16" },
        { "label": "Nelson Region", "code": "17" },
        { "label": "Marlborough Region", "code": "18" },
        { "label": "Auckland Region", "code": "2" },
        { "label": "Waikato Region", "code": "3" },
        { "label": "Bay of Plenty Region", "code": "4" },
        { "label": "Gisborne Region", "code": "5" },
        { "label": "Hawke's Bay Region", "code": "6" },
        { "label": "Taranaki Region", "code": "7" },
        { "label": "Manawatu-Wanganui Region", "code": "8" },
        { "label": "Wellington Region", "code": "9" },
        { "label": "Area Outside Region", "code": "99" },
      ],  }.to_json
  end

  # rubocop:enable Metrics/MethodLength

  def self.custom_area_definitions_response(area_code)
    { "tableName": area_code,
      "items":
      [
        { "label": "Northland Region", "code": "1" },
        { "label": "West Coast Region", "code": "12" },
      ],  }.to_json
  end
end
