# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :encrypted_name
      t.column :email, :email, null: false, index: { unique: true }
      t.string :encrypted_address

      t.text :encrypted_name_iv
      t.text :encrypted_address_iv

      t.timestamps null: false
    end
  end
end
