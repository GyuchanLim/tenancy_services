class Api::V1::StatisticsController < ApplicationController
  def search
    @client = Api::Tenancy::Client.new
    body = { "period-ending": "2020-01", "num-months": 3, "area-definition": "IMR2017" }

    statistics = @client.statistics(body)
    render json: { data: statistics }
  end
end
