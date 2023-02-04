import {
    Model,
    Table,
    AutoIncrement,
    PrimaryKey,
    Column,
  } from "sequelize-typescript";

  @Table({
    underscored: true,
    tableName: "user",
    timestamps: true,
  })
  export default class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;
  
    @Column
    ip!: string;
  
  }