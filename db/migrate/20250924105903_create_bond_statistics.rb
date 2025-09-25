class CreateBondStatistics < ActiveRecord::Migration[8.0]
  def change
    create_table :bond_statistics, primary_key: [:area_label_id, :dwelling_type, :bedroom_count] do |t|
      t.references :area_label
      t.integer :dwelling_type, null: false
      t.integer :bedroom_count, null: false
      t.integer :n_lodged
      t.integer :n_closed
      t.integer :n_curr
      t.float :mean
      t.integer :lq
      t.float :med
      t.integer :uq
      t.float :sd
      t.float :brr
      t.float :lmean
      t.float :lsd
      t.integer :slq
      t.integer :suq

      t.timestamps
    end

    add_index :bond_statistics, [:dwelling_type, :bedroom_count, :area_label_id]
  end
end
