import { Factory, Seeder } from 'typeorm-seeding';

import { Profile } from '../../api/profiles/entities/profile.entity';

export default class CreateDummyProfiles implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(Profile)().createMany(40);
  }
}
