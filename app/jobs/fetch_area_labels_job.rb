# This job queues TenancyServices::FetchAreaLabels
class FetchAreaLabelsJob < ApplicationJob
  queue_as :default

  def perform(area_definition)
    TenancyServices::FetchAreaLabels.call(area_definition)
  end
end
