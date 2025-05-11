// lib/sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME!,    
  process.env.DB_USER!,    
  process.env.DB_PASS!,     
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',       
    logging: true,
  }
);

export default sequelize;
