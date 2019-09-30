class CreateUserWithPostgresPgpEncryptions < ActiveRecord::Migration[6.0]
  def change
    create_table :user_with_postgres_pgp_encryptions do |t|
      t.string :encrypted_name
      t.column :email, :email, null: false, index: { unique: true }
      t.string :encrypted_address

      t.text :encrypted_name_iv
      t.text :encrypted_address_iv

      t.timestamps null: false
    end
  end
end
