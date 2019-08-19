# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.column :email, :email, null: false, index: { unique: true }
      t.string :address

      t.timestamps null: false
    end
  end
end
