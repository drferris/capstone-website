class ContactMailer < ActionMailer::Base
  default from: "dave.ferris@snc.edu"

  def contact_message(mail_message)
    @mail_message = mail_message
    mail to: 'dave.ferris@snc.edu',
         subject: 'Visitor Contact from Capstone Site'
  end
end
