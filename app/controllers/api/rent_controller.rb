class Api::RentController < ApplicationController
  def index
    client = NewZealand::Tenancy::RequestRent.new.call
    ad = client.area_definitions

    render json: { data: ad }
  end
end
