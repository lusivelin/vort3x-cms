import { Site } from 'src/sites/entities/site.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ default: false })
  isPublish: boolean;

  @ManyToOne(() => Site, (site) => site.pages, {
    eager: true,
  })
  site: Site;
}
