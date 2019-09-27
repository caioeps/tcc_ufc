class CreateUserWithLocalEncryptions < ActiveRecord::Migration[6.0]
  def change
    create_table :user_with_local_encryptions do |t|
      t.string :name
      t.column :email, :email, null: false, index: { unique: true }
      t.string :address

      t.timestamps null: false
    end
  end
end
