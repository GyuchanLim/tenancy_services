class Api::V1::RentController < ApplicationController
  def index
    market_rent_client = NewZealand::Tenancy::MarketRent.new.call
    area_definitions = market_rent_client.area_definitions

    render json: { data: area_definitions }
  end

  # def show
  #   market_rent_client = NewZealand::Tenancy::MarketRent.new.call

  #   # to some area checking
  #   area_definitions = market_rent_client.area_definitions(params[:area])

  #   render json: { data: ad }
  # end
end
