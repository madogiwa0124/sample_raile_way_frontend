# frozen_string_literal: true

class Ui::Alert::Component < ViewComponent::Base
  def initialize(notice: nil, alert: nil)
    @notice = notice
    @alert = alert
  end
end
