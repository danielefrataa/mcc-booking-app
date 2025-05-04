import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import SubSektor from './SubSektor.js';
import SDG from './SDG.js';

const SubsektorSDG = sequelize.define('SubsektorSDG', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_subsektor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SubSektor,
      key: 'id'
    }
  },
  id_sdg: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: SDG,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'subsektor_sdg',
  timestamps: false
});

SubsektorSDG.belongsTo(SubSektor, { foreignKey: 'id_subsektor' });
SubsektorSDG.belongsTo(SDG, { foreignKey: 'id_sdg' });

export default SubsektorSDG; 