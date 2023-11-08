import { faker } from '@faker-js/faker';
import { AuthorSex, Post } from "@/types/post";

export function createRandomTableData(): Post {
    return {
            id: faker.number.int(),
            title: faker.lorem.word({
                strategy: 'longest',
                length: {
                    min: 4,
                    max: 8
                }
            }),
            description: faker.lorem.paragraph({
                min: 5,
                max: 10
            }),
            createdAt: faker.date.past(),
            author: {
                name: faker.person.fullName(),
                age: faker.number.int({
                    min: 18,
                    max: 70
                }),
                sex: (faker.person.sex() as AuthorSex),
                job: faker.person.jobTitle()
            }
        }
}

export const POSTS_MOCK: Array<Post> = faker.helpers.multiple(createRandomTableData, {
    count: 100,
});