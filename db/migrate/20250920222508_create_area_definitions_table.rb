class CreateAreaDefinitionsTable < ActiveRecord::Migration[8.0]
  def change
    create_table :area_definitions do |t|
      t.string :label
      t.string :code
      t.timestamps
    end
  end
end
