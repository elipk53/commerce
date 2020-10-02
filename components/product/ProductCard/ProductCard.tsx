import cn from 'classnames'
import s from './ProductCard.module.css'
import React, { FunctionComponent } from 'react'
import { Heart } from '@components/icon'
interface Props {
  className?: string
  children?: any
}

const ProductCard: FunctionComponent<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className)
  return (
    <div className={rootClassName}>
      <div className="absolute">
        <h1 className="px-8 py-2 bg-white text-black font-bold text-3xl">
          T-Shirt
        </h1>
        <div className="px-6 py-2 pb-4 bg-white text-black font-semibold inline-block">
          $50
        </div>
      </div>
      <div className="absolute flex items-center justify-center h-12 w-12 bg-white text-black">
        <Heart />
      </div>
      <div className="flex-1 h-full p-24">
        <div className="bg-violet h-full"></div>
      </div>
    </div>
  )
}

export default ProductCard
