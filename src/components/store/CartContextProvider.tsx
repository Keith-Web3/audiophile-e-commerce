import React, { createContext, ReactNode, useState } from 'react'

export interface Item {
  imgUrl: string
  name: string
  price: string
  count: number
}
export type cart = {
  items: Item[] | []
  dispatchItem: (
    param:
      | { action: 'ADD'; payload: Item }
      | { action: 'REMOVE'; payload: { name: string } }
      | { action: 'CLEAR'; payload: null }
  ) => void
}

const CartContext = createContext<cart>({
  items: [],
  dispatchItem(param) {
    console.log('Do something')
  },
})

export const CartProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [items, setItems] = useState<Item[] | []>([])

  const initialValue: cart = {
    items: items,
    dispatchItem({ action, payload }) {
      if (action === 'CLEAR') {
        setItems([])
        return
      }
      const idx = items.findIndex(item => item.name === payload.name)
      const clonedItems = items.map(item => ({ ...item }))
      if (action === 'ADD') {
        if (idx === -1) {
          setItems(prev => [...prev, payload])
        } else {
          clonedItems[idx].count += payload.count
          setItems(clonedItems)
        }
      } else if (action === 'REMOVE') {
        if (clonedItems[idx].count > 1) {
          clonedItems[idx].count--
          setItems(clonedItems)
        } else {
          clonedItems.splice(idx, 1)
          setItems(clonedItems)
        }
      }
    },
  }
  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  )
}

export default CartContext
