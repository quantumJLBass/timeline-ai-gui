const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class ArchivedTimelineEntry extends Model {}

ArchivedTimelineEntry.init({
  originalId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'ArchivedTimelineEntry',
  tableName: 'archived_timeline_entries'
});

module.exports = ArchivedTimelineEntry;
