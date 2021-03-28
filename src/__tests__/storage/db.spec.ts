import { connect, connection } from "../../storage/db"

describe('db tests', () => {
    it ('can connect', async () => {
        await connect()
        expect(connection).toBeTruthy()
    })    
})
