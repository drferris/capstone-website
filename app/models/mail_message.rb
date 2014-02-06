class MailMessage < ActiveRecord::Base
  has_no_table

  column :name, :string
  column :email, :string
  column :message, :string
  validates_presence_of :name, :email, :message

end
