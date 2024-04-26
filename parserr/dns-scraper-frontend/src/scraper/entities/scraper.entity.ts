import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ScrapedData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: string;
}
