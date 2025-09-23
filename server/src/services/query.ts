import pool from "../lib/dbConnect";

export abstract class BaseServices<T> {
  protected tableName: string;
  protected selectableFields:string ="*"

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  protected async getAll(): Promise<T[]> {
    const result = await pool.query(`SELECT ${this.selectableFields} FROM ${this.tableName}`);
    return result.rows;
  }


  protected async getOne<K extends keyof T>(column:K,value:T[K]): Promise<T | null> {
    const result = await pool.query(`SELECT * FROM ${this.tableName} WHERE ${String(column)} = $1 LIMIT 1`,[value]);
    return result.rows[0] || null;
  }
  

  protected async create(data: Partial<T>): Promise<T> {
    const keys = Object.keys(data);
    if (keys.length === 0) throw new Error("No fields provided for insert");
    const values = Object.values(data);
    const columns = keys.join(", ");
    const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
    const result = await pool.query(`INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *`,values);
    return result.rows[0];
  }

  protected async update(id: number, data: Partial<T>): Promise<T | null> {
    const keys = Object.keys(data);
    if (keys.length === 0) throw new Error("No fields provided for update");
    const values = Object.values(data);
    const setQuery = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
    const result = await pool.query(`UPDATE ${this.tableName} SET ${setQuery} WHERE id = $${keys.length + 1} RETURNING *`,[...values, id]);
    return result.rows[0] || null;
  }

  protected async delete(id: number): Promise<boolean> {
    const result = await pool.query(`DELETE FROM ${this.tableName} WHERE id = $1`,[id]);
    return (result.rowCount ?? 0) > 0;
  }
}
