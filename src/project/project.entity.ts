import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum StatusProject {
    BelumDilaksanakan = 'notstarted',
    OnProgress = 'onprogress',
    Selesai = 'completed',
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ default: 'onprogress' })
  status: string;
}
