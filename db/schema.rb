# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_09_24_105903) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "area_definitions", force: :cascade do |t|
    t.string "label"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "area_labels", force: :cascade do |t|
    t.bigint "area_definition_id"
    t.string "label"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_definition_id"], name: "index_area_labels_on_area_definition_id"
  end

  create_table "bond_statistics", primary_key: ["area_label_id", "dwelling_type", "bedroom_count"], force: :cascade do |t|
    t.bigint "area_label_id", null: false
    t.integer "dwelling_type", null: false
    t.integer "bedroom_count", null: false
    t.integer "n_lodged"
    t.integer "n_closed"
    t.integer "n_curr"
    t.float "mean"
    t.integer "lq"
    t.float "med"
    t.integer "uq"
    t.float "sd"
    t.float "brr"
    t.float "lmean"
    t.float "lsd"
    t.integer "slq"
    t.integer "suq"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_label_id"], name: "index_bond_statistics_on_area_label_id"
    t.index ["dwelling_type", "bedroom_count", "area_label_id"], name: "idx_on_dwelling_type_bedroom_count_area_label_id_1251b8b4cb"
  end
end
