import ProductCard from "@/components/ProductCard";
import { supabase } from "@/utils/supabaseClient";
let { data: produkter, error } = await supabase
  .from("produkter")
  .select("*")
  .order("id", { ascending: false })
  .limit(3);

import Modal from "@/components/Modal";
import TryAgainBtn from "@/components/TryAgainBtn";
import Image from "next/image";

export default function Resultspage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden">
        <div className="flex flex-col items-center justify-center mt-10 h-32">
          <h2 className="text-4xl font-serif font-medium text-center ">
            Gaveideer
          </h2>
        </div>
        <div className="w-screen flex justify-center mb-10 lg:mt-10 lg:mb-10">
          <TryAgainBtn />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          <div className="mt-0 lg:mt-20">
            <ProductCard
              name={produkter[0].name}
              brand={produkter[0].brand}
              image={produkter[0].image}
              price={produkter[0].price}
              key={produkter[0].id}
              color="slate-500"
            />
            <Image
              src="/pillar-1.png"
              alt="pillar"
              width="300"
              height="1200"
              className="hidden lg:block -translate-x-1"
            />
          </div>
          <div>
            <ProductCard
              name={produkter[1].name}
              brand={produkter[1].brand}
              image={produkter[1].image}
              price={produkter[1].price}
              key={produkter[1].id}
            />
            <Image
              src="/pillar-1.png"
              alt="pillar"
              width="300"
              height="1200"
              className="hidden lg:block -translate-x-1"
            />
          </div>
          <div className="mt-0 lg:mt-32">
            <ProductCard
              name={produkter[2].name}
              brand={produkter[2].brand}
              image={produkter[2].image}
              price={produkter[2].price}
              key={produkter[2].id}
            />
            <Image
              src="/pillar-1.png"
              alt="pillar"
              width="300"
              height="1200"
              className="hidden lg:block -translate-x-1"
            />
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
}
