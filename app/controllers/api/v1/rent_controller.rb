class Api::V1::RentController < ApiController
  def index
    market_rent_client = Api::Tenancy::Client.new
    area_definitions = market_rent_client.area_definitions

    render json: { data: area_definitions }
  end
end
