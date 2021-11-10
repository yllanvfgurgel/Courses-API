import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name, description}: IRequest): Category[] {
        return this.categoriesRepository.list();
    }
}

export {ListCategoriesUseCase};