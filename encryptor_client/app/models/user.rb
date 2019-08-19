class User < ApplicationRecord
  attr_encrypted :name, :address, encryptor: TccEncryptor

  validates :email, presence: true, uniqueness: true
end
