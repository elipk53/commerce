import { createContext, ReactNode, useContext } from 'react'

const Commerce = createContext<CommerceConfig | null>(null)

export type CommerceProps = {
  children?: ReactNode
  config: CommerceConfig
}

export type CommerceConfig = {
  fetcher: Fetcher<any>
  locale: string
}

export type Fetcher<T> = (...args: any) => T | Promise<T>

export function CommerceProvider({ children, config }: CommerceProps) {
  if (!config) {
    throw new Error('CommerceProvider requires a valid config object')
  }

  return <Commerce.Provider value={config}>{children}</Commerce.Provider>
}

export function useCommerce<T extends CommerceConfig>() {
  return useContext(Commerce) as T
}
