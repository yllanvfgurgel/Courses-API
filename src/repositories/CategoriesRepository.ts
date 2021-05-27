import { Category } from "../models/Category";

class CategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICategoryDTO): void {
        const category = new Category();

        Object.assign(category, { name, description, created_at: new Date() });

        this.categories.push(category);
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }

    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesRepository };
