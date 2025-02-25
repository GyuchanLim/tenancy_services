class Api::V1::StatisticController < ApplicationController
  def search
    @client = Api::Tenancy::Client.new

    body = statistic_params_hash.merge({
      "period-ending": "2024-12",
      "num-months": 20,
      "area-definition": "SAU2019",
      "dwelling-type": "House"
    })

    statistic = @client.statistic(body)
    render json: { data: statistic }
  end

  private

  def statistic_params_hash
    params.require(:statistic).permit(:location, :bedrooms)

    {
      "area-labels": params[:location],
      "num-bedrooms": params[:bedrooms]
    }
  end
end
