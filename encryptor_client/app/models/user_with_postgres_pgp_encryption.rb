# frozen_string_literal: true

class UserWithPostgresPgpEncryption < ApplicationRecord
  attr_encrypted :name, :address,
                 encryptor: PostgresPgpEncryptor,
                 key: '0b476876c68d30b1f729a59869606b99'

  validates :email, presence: true, uniqueness: true
end
