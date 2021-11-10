import { Specification } from "../models/Specification";

interface ISpecificationsRepository {
    create({name, description}: ISpecificationDTO): void;
    findByName(name : string): Specification;
}

export {ISpecificationsRepository};