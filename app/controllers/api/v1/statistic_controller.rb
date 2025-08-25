class Api::V1::StatisticController < ApiController
  def search
    @client = Api::Tenancy::Client.new

    body = statistic_params_hash.merge({
      "period-ending": "2024-12",
      "num-months": 20,
      "area-definition": "SAU2019"
    })

    statistic = @client.statistic(body)

    render json: { data: statistic }
  end

  private

  def statistic_params_hash
    params.require(:statistic).permit(:location, bedrooms: [], dwellingType: [])

    {
      "area-labels": params[:location],
      "num-bedrooms": params[:bedrooms],
      "dwelling-type": params[:dwellingType].join(",")
    }
  end
end
