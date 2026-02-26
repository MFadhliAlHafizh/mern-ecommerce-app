import { ProductCard } from "./ProductCard"

export const BestSeller = () => {
  return (
    <div className="mt-16">
        <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
        <div>
            <ProductCard></ProductCard>
        </div>
    </div>
  )
}
