class Ui::Button < ViewComponent::Base
  def initialize(text:, valiant: 'primary', options: {})
    @text = text
    @valiant = valiant
    @options = options
    @options[:class] = (default_class + custom_class).join(' ')
  end

  def default_class
    values = ['ui-button', 'tw-p-2', 'tw-text-white', 'tw-rounded-md']
    if @valiant == 'primary'
      values.push 'tw-bg-green-700'
    elsif @valiant == 'danger'
      values.push 'tw-bg-red-700'
    end
  end

  def custom_class
    Array.wrap(@options[:class].presence || [])
  end

  def call
    button_tag @text, **@options
  end
end
