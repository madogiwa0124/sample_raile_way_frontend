# frozen_string_literal: true

class Ui::Error::Component < ViewComponent::Base
  renders_one :body

  def initialize(options: {})
    @options = options
    @options[:class] = [default_class + custom_class].join(' ')
  end

  def default_class
    [
      'ui-errer',
      'tw-text-red-700'
    ]
  end

  def custom_class
    Array.wrap(@options[:class].presence || [])
  end
end
