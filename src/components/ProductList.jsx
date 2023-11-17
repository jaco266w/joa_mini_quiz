import { supabase } from "@/utils/supabaseClient";
import ProductCard from "./ProductCard";
import QuizCard from "./QuizCard";

let { data: produkter, error } = await supabase
  .from("produkter")
  .select("*")
  .order("id", { ascending: true })
  .limit(11);

function ProductList(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
      {produkter.slice(0, 2).map((produkt) => (
        <ProductCard
          name={produkt.name}
          brand={produkt.brand}
          image={produkt.image}
          price={produkt.price}
          key={produkt.id}
        />
      ))}
      <QuizCard />
      {produkter.slice(2).map((produkt) => (
        <ProductCard
          name={produkt.name}
          brand={produkt.brand}
          image={produkt.image}
          price={produkt.price}
          key={produkt.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
