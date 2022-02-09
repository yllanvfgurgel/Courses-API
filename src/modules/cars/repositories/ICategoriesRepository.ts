import { Category } from "../models/Category";

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICategoryDTO): void
}

export { ICategoriesRepository }