import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Profile } from '../../api/profiles/entities/profile.entity';

define(Profile, (faker: typeof Faker) => {
  const profile = new Profile();

  profile.screenName = faker.internet.userName() + '.' + faker.random.number();
  profile.displayName = faker.name.findName();
  profile.bio = faker.lorem.paragraph();

  return profile;
});
