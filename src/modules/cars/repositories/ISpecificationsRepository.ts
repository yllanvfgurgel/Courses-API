interface ISpecificationsRepository {
    create({name, description}: ICategoryDTO): void;
}

export {ISpecificationsRepository};