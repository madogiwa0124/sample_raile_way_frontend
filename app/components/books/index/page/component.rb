# frozen_string_literal: true

class Books::Index::Page::Component < ViewComponent::Base
  def initialize(books:)
    @books = books
  end

  def component_class_name
    self.class.name.underscore.gsub('/', '_').gsub('_', '-')
  end
end
