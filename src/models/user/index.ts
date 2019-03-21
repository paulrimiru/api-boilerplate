import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID,
  })
  public id!: string;

  @Column
  public name!: string;

  @CreatedAt
  public creationDate!: Date;

  @UpdatedAt
  public updatedOn!: Date;
}
