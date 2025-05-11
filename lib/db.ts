// lib/db.ts
import sequelize from './sequelize';
import User from '../models/User';

let synced = false;

export async function initDB() {
  if (!synced) {
    await sequelize.sync(); 
    await User.sync();
    synced = true;
    console.log('✅ Database synced');
  }
}
