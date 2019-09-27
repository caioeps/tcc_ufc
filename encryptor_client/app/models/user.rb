class User < ApplicationRecord
  attr_encrypted :name, :address, encryptor: RemoteEncryptor, secret_key: 'dsabhdbshadusa'

  validates :email, presence: true, uniqueness: true
end
