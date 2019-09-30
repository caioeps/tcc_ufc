# frozen_string_literal: true

class UserWithLocalEncryption < ApplicationRecord
  attr_encrypted :name, :address, key: '438227d29c71439c5657f0c39b899d24'

  validates :email, presence: true, uniqueness: true
end
