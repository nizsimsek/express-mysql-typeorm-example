import { getRepository } from "typeorm";
import { Children } from "../models/Children";

export class ChildrenController {
    private childrenRepository = getRepository(Children);

    async findAll(req, res) {
        const childs = await this.childrenRepository.find();
        res.send(childs);
    }

    async findOneById(req, res) {
        const child = await this.childrenRepository.findOne(req.params.id);
        if (child != null) {
            res.send(child);
        } else {
            res.send("Child not found");
        }
    }

    async create(req, res) {
        const child = await this.childrenRepository.create(req.body);
        const results = await this.childrenRepository.save(child);
        res.send(results);
    }

    async updateById(req, res) {
        const child = await this.childrenRepository.findOne(req.params.id);
        try {
            await this.childrenRepository.merge(child, req.body);
            await this.childrenRepository.save(child);
            res.send(child);
        } catch (error) {
            res.send("Child not found");
        }
    }

    async deleteById(req, res) {
        const results = await this.childrenRepository.delete(req.params.id);
        res.send(results);
    }
}
