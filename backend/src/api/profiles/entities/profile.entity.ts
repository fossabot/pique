import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  screenName: string;

  @Column()
  indexedScreenName: string;

  @Column()
  displayName?: string;

  @Column()
  bio?: string;

  @Column()
  avatarUri?: string;

  @Column()
  headerUri?: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  updateIndexedScreenName() {
    this.indexedScreenName = this.screenName.toLowerCase().replace(/[_.]/g, '');
  }
}
