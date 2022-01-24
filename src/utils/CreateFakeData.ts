import { getRepository } from "typeorm";
import { Children } from "../models/Children";
import { Father } from "../models/Father";

// create fake data function
export const createFakeData = async () => {

    // create repositories
    const childrenRepository = getRepository(Children);
    const fatherRepository = getRepository(Father);

    // create fake datas
    const children1 = new Children();
    children1.firstName = "John";
    children1.lastName = "Doe";
    await childrenRepository.save(children1);

    const children2 = new Children();
    children2.firstName = "Jane";
    children2.lastName = "Doe";
    await childrenRepository.save(children2);

    const father1 = new Father();
    father1.firstName = "James";
    father1.lastName = "Doe";
    father1.childrens = [children1, children2];
    await fatherRepository.save(father1);
}
