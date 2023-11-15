import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 ">
      <div className="flex gap-2 py-6">
        <h1 className="text-4xl font-extrabold font-serif">Matas</h1>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      {/* <ProductCard />
      <QuizCard /> */}
      <ProductList />
    </main>
  );
}
