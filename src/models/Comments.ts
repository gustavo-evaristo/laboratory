import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Users, Helps } from './';

@Entity('comments')
export class Comments {
  @PrimaryColumn()
  id: number;

  @JoinColumn({ name: 'owner' })
  @ManyToOne(() => Users)
  _owner: Users;

  @Column()
  owner: number;

  @JoinColumn({ name: 'help' })
  @ManyToOne(() => Helps)
  _help: Helps;

  @Column()
  help: number;

  @Column()
  description: string;

  @Column()
  file: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
