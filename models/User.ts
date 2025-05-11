import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../lib/sequelize';

interface userAttributes{
    userId:number;
    name:string;
    email:string;
    password:string;
    status:number;
    createdBy:number;
    updatedBy:number;
    deletedBy:number;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}

export type userInput = Optional <userAttributes,'userId'>
export type userOutput = Required <userAttributes>

class User extends Model<userInput,userAttributes> implements userAttributes{
    public userId!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public status!: number;
    public createdBy!: number;
    public updatedBy!: number;
    public deletedBy!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
    
}

User.init({
    userId:{
        type:DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    status: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdBy: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    updatedBy: {
        type:DataTypes.INTEGER
    },
    deletedBy:{
        type:DataTypes.INTEGER
    },
    createdAt: {
        type:DataTypes.DATE,
        allowNull:false
    },
    updatedAt: {
        type:DataTypes.DATE
    },
    deletedAt: {
        type:DataTypes.DATE
    }
},{
    sequelize:sequelize,
    tableName:"user",
    paranoid:true
})

export default User;