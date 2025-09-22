class CreateAreaLabels < ActiveRecord::Migration[8.0]
  def change
    create_table :area_labels do |t|
      t.references :area_definition
      t.string :label
      t.string :code
      t.timestamps
    end
  end
end
