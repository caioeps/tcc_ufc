# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_27_024321) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "user_with_local_encryptions", force: :cascade do |t|
    t.string "encrypted_name"
    t.citext "email", null: false
    t.string "encrypted_address"
    t.text "encrypted_name_iv"
    t.text "encrypted_address_iv"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_user_with_local_encryptions_on_email", unique: true
  end

  create_table "user_with_postgres_pgp_encryptions", force: :cascade do |t|
    t.string "encrypted_name"
    t.citext "email", null: false
    t.string "encrypted_address"
    t.text "encrypted_name_iv"
    t.text "encrypted_address_iv"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_user_with_postgres_pgp_encryptions_on_email", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "encrypted_name"
    t.citext "email", null: false
    t.string "encrypted_address"
    t.text "encrypted_name_iv"
    t.text "encrypted_address_iv"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
