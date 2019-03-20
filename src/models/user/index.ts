import { Table, Column, Model, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id!: string;

  @Column
  name!: string;
  
  @CreatedAt
  creationDate!: Date;

  @UpdatedAt
  updatedOn!: Date;
}
