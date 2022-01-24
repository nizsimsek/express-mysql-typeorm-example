import { getRepository } from "typeorm";
import { Children } from "../models/Children";
import { Father } from "../models/Father";

// clear all datas
export const cleanAllData = async () => {
    try {
        const entities = [Children, Father];
        for (const entity of entities) {
            const repository = await getRepository(entity.name);
            await repository.query('DELETE FROM ' + entity.name.toLowerCase());
        }
    } catch (error) {
        throw new Error(`ERROR: Cleaning test db: ${error}`);
    }
}