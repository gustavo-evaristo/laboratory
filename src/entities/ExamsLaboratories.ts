import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Laboratory } from './Laboratory';
import { Exam } from './Exam';

@Entity('exams-laboratories')
export class ExamsLaboratories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  laboratory!: number;

  @JoinColumn({ name: 'laboratory' })
  @ManyToOne(() => Laboratory, { onDelete: 'CASCADE' })
  _laboratory!: Laboratory;

  @Column()
  exam!: number;

  @JoinColumn({ name: 'exam' })
  @ManyToOne(() => Exam, { onDelete: 'CASCADE' })
  _exam!: Exam;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
