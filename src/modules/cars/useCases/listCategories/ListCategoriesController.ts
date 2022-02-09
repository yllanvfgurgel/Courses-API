import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const {name, description} = request.body;

        const categories = this.listCategoriesUseCase.execute({name, description});

        return response.json(categories);
    }
}

export {ListCategoriesController};