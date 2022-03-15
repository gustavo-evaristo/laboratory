import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Users } from './Users';

@Entity('helps')
export class Helps {
  @PrimaryColumn()
  id: number;

  @JoinColumn({ name: 'owner' })
  @ManyToOne(() => Users)
  _owner: Users;

  @Column()
  owner: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  file: string;

  @Column()
  status: string;

  @Column()
  public: boolean;

  @Column()
  stars: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
