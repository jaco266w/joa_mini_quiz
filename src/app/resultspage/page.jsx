import ProductCard from "@/components/ProductCard";
import { supabase } from "@/utils/supabaseClient";
let { data: produkter, error } = await supabase.from("produkter").select("*").order("id", { ascending: false }).limit(4);

export default function Resultspage() {
  return (
    <div className="flex flex-col bg-neutral justify-items-center min-h-screen">
      <div className=" grid place-content-center mt-32">
        <h2 className="text-9xl font-serif font-black text-center mb-32">Gaveideer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
          {produkter.slice(0, 2).map((produkt) => (
            <ProductCard name={produkt.name} brand={produkt.brand} image={produkt.image} price={produkt.price} key={produkt.id} />
          ))}

          {produkter.slice(2).map((produkt) => (
            <ProductCard name={produkt.name} brand={produkt.brand} image={produkt.image} price={produkt.price} key={produkt.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
