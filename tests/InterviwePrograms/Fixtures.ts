import { test as base } from '@playwright/test';

type MyFixture = {
  helloworld: void;
};

export const test = base.extend<MyFixture>({
  helloworld: async ({}, use) => {
    console.log('Hello world');
    await use();
    console.log('good bye')
  },
});