import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './Users';

@Entity('helps')
export class Helps {
  @PrimaryGeneratedColumn()
  id!: number;

  @JoinColumn({ name: 'owner' })
  @ManyToOne(() => Users)
  _owner!: Users;

  @Column()
  owner!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  category!: string;

  @Column()
  file: string;

  @Column()
  status!: string;

  @Column()
  is_private!: boolean;

  @Column()
  stars!: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.stars) this.stars = 5.0;
    if (!this.status) this.status = 'OPEN';
  }
}
