# This job queues TenancyServices::FetchAreaLabels
class FetchAreaLabelsJob < ApplicationJob
  queue_as :default

  def perform(area_definition)
    TenancyServices::FetchAreaLabels.new(area_definition).call
  end
end
