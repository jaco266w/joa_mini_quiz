import ProductCard from "@/components/ProductCard";
import { supabase } from "@/utils/supabaseClient";
let { data: produkter, error } = await supabase
  .from("produkter")
  .select("*")
  .order("id", { ascending: false })
  .limit(3);

import Modal from "@/components/Modal";
import TryAgainBtn from "@/components/TryAgainBtn";

export default function Resultspage() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center h-32">
          <h2 className="text-4xl font-serif font-medium text-center ">
            Gaveideer
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          <div style={{ marginTop: "4rem" }}>
            <ProductCard
              name={produkter[0].name}
              brand={produkter[0].brand}
              image={produkter[0].image}
              price={produkter[0].price}
              key={produkter[0].id}
            />
          </div>
          <div style={{ marginTop: "0rem" }}>
            <ProductCard
              name={produkter[1].name}
              brand={produkter[1].brand}
              image={produkter[1].image}
              price={produkter[1].price}
              key={produkter[1].id}
            />
          </div>
          <div style={{ marginTop: "8rem" }}>
            <ProductCard
              name={produkter[2].name}
              brand={produkter[2].brand}
              image={produkter[2].image}
              price={produkter[2].price}
              key={produkter[2].id}
            />
          </div>
        </div>
        <div className="w-screen flex justify-center">
          <TryAgainBtn />
        </div>
        <Modal />
      </div>
    </div>
  );
}
