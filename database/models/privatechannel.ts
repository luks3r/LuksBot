import {Model, DataTypes} from "../../deps.ts"

export class PrivateChannel extends Model {
    static table = "privatechannels"
    static timestamps = true

    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        owner_id: DataTypes.STRING,
        channel_name: DataTypes.STRING
    }
}