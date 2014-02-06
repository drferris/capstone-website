class MailMessagesController < ApplicationController
  def new
    @mail_message = MailMessage.new
  end

  def create
    @mail_message = MailMessage.new(params[:mail_message])
    if(ContactMailer.contact_message(@mail_message).deliver)
      redirect_to contact_path
      abort 'as;dlkaf;sfj'
    else
      render :new
      abort 'nooooooooooooo'
    end
  end
end
