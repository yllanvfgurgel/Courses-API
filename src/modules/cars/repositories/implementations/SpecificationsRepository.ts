import { Specification } from "../../models/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if(!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }
    
    create({ name, description }: ISpecificationDTO): void {
        const specification = new Specification();
        
        Object.assign(specification, {name, description, created_at: new Date()});
        
        this.specifications.push(specification);
    }
    
    findByName(name: string): Specification {
        return this.specifications.find(x => x.name === name);
    }
}

export {SpecificationsRepository};