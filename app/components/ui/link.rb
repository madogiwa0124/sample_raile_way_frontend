class Ui::Link < ViewComponent::Base
  def initialize(text:, path:, options: {})
    @text = text
    @path = path
    @options = options
    @options[:class] = (default_class + custom_class).join(' ')
  end

  def default_class
    ['ui-link', 'tw-text-blue-500']
  end

  def custom_class
    Array.wrap(@options[:class].presence || [])
  end

  def call
    link_to(@text, @path, **@options)
  end
end
