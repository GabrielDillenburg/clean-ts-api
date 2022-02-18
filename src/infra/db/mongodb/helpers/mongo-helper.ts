import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, { tls: false })
  },

  async disconnect (): Promise<void> {
    await this.client?.close()
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.client.connect(this.uri)
    }
    return this.client.db().collection(name)
  }

  // map: (data: any): any => {
  //   const { _id, ...rest } = data
  //   return { ...rest, id: _id.toHexString() }
  // },

  // mapCollection: (collection: any[]): any[] => {
  //   return collection.map(c => MongoHelper.map(c))
  // }
}
