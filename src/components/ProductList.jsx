import { supabase } from "@/utils/supabaseClient";
import ProductCard from "./ProductCard";

let { data: produkter, error } = await supabase
    .from("produkter")
    .select("*")
    .order("id", { ascending: true })
    .limit(10);



function ProductList(props) {
    return (
        <div>
            {produkter.map((produkt) => (
                <ProductCard produkt={produkt} key={produkt.id}/>
            ))}
        </div>
    );
}

export default ProductList;