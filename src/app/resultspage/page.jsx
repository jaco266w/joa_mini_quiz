import ProductCard from "@/components/ProductCard";
import { supabase } from "@/utils/supabaseClient";
let { data: produkter, error } = await supabase
  .from("produkter")
  .select("*")
  .order("id", { ascending: false })
  .limit(4);

export default function Resultspage() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center h-32">
        <h2 className="text-4xl font-serif font-medium text-center ">
          Gaveideer
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mx-auto">
        {produkter.slice(0, 3).map((produkt, index) => (
          <div key={index} style={{ marginTop: `${2 * index}rem` }}>
            <ProductCard
              name={produkt.name}
              brand={produkt.brand}
              image={produkt.image}
              price={produkt.price}
              key={produkt.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
