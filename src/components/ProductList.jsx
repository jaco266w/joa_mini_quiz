import { supabase } from "@/utils/supabaseClient";
import ProductCard from "./ProductCard";
import QuizCard from "./QuizCard";

let { data: produkter, error } = await supabase
    .from("produkter")
    .select("*")
    .order("id", { ascending: true })
    .limit(10);



function ProductList(props) {
    return (
        <div>
            {produkter.slice(0, 3).map((produkt) => (
                <ProductCard name={produkt.name} brand={produkt.brand} image={produkt.image} price={produkt.price} key={produkt.id}/>
            ))}
            <QuizCard />
            {produkter.slice(3).map((produkt) => (
                <ProductCard name={produkt.name} brand={produkt.brand} image={produkt.image} price={produkt.price} key={produkt.id}/>
            ))}
        </div>
    );
}

export default ProductList;