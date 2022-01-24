import { getRepository } from "typeorm";
import { Father } from "../models/Father";

export class FatherController {
    private fatherRepository = getRepository(Father);

    async findAll(req, res) {
        // bring the fathers with their children
        const fathers = await this.fatherRepository.find({ relations: ['childrens'] });
        res.send(fathers);
    }

    async findOneById(req, res) {
        const child = await this.fatherRepository.findOne(req.params.id);
        if (child != null) {
            res.send(child);
        } else {
            res.send("Father not found");
        }
    }

    async create(req, res) {
        const child = await this.fatherRepository.create(req.body);
        const results = await this.fatherRepository.save(child);
        res.send(results);
    }

    async updateById(req, res) {
        const child = await this.fatherRepository.findOne(req.params.id);
        try {
            await this.fatherRepository.merge(child, req.body);
            await this.fatherRepository.save(child);
            res.send(child);
        } catch (error) {
            res.send("Father not found");
        }
    }

    async deleteById(req, res) {
        const results = await this.fatherRepository.delete(req.params.id);
        res.send(results);
    }
}
