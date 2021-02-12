import { ShopifyConfig } from '@framework/api'
import { CollectionEdge } from '@framework/schema'
import getSiteCollectionsQuery from './queries/get-all-collections-query'

export type Category = {
  endityId: string
  name: string
  path: string
}

const getCategories = async (config: ShopifyConfig): Promise<Category[]> => {
  const { data } = await config.fetch(getSiteCollectionsQuery, {
    variables: {
      first: 250,
    },
  })

  return (
    data?.collections?.edges?.map(
      ({ node: { title: name, handle } }: CollectionEdge) => ({
        entityId: handle,
        name,
        path: `/${handle}`,
      })
    ) ?? []
  )
}

export default getCategories
