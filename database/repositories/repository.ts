export interface IBaseRepository<TEntity, TKey> {
  list(): Array<TEntity>;
  first(id: TKey): TEntity | undefined;

  add(entity: TEntity): TEntity;
  update(entity: TEntity): TEntity;
  remove(id: TKey): void;

  exists(is: TKey): boolean;
}

export class BaseRepository<TEntity, TKey, TContext>
  implements IBaseRepository<TEntity, TKey> {
  constructor(private readonly context: TContext) {}

  list(): TEntity[] {
    throw new Error("Method not implemented.");
  }
  first(id: TKey): TEntity | undefined {
    throw new Error("Method not implemented.");
  }
  add(entity: TEntity): TEntity {
    throw new Error("Method not implemented.");
  }
  update(entity: TEntity): TEntity {
    throw new Error("Method not implemented.");
  }
  remove(id: TKey): void {
    throw new Error("Method not implemented.");
  }
  exists(is: TKey): boolean {
    throw new Error("Method not implemented.");
  }
}
