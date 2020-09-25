class PagesController < ApplicationController
  def index
    if params[:url].present?
      url = params[:url]
      result =  { "url": "#{helpers.short_url(url)}" }
      render :json => result
    end
  end
end
