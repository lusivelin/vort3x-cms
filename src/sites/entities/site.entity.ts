import { Page } from 'src/pages/entities/page.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ default: false })
  isPublish: boolean;

  @OneToMany(() => Page, (page) => page.site)
  pages: Page[];
}
