import { faker as Faker } from '@faker-js/faker';

type FakerData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  avatar: string;
};

export const faker = (): FakerData => {
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const email = Faker.internet.email();
  const password = Faker.internet.password(10, true, /[a-z]/, '@123Z');
  const avatar = Faker.internet.avatar();

  return {
    name,
    email,
    password,
    confirm_password: password,
    avatar,
  };
};
