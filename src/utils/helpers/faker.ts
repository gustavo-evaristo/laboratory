import { faker as Faker } from '@faker-js/faker';

type FakerData = {
  name: string;
  email: string;
  password: string;
  avatar: string;
  description: string;
  title: string;
  category: string;
};

export const faker = (): FakerData => {
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const email = Faker.internet.email();
  const password = Faker.internet.password(10, true, /[a-z]/, '@123Z');
  const avatar = Faker.internet.avatar();
  const description = Faker.lorem.paragraphs();
  const title = Faker.lorem.text();
  const category = Faker.lorem.word();

  return {
    name,
    email,
    password,
    avatar,
    description,
    title,
    category,
  };
};
