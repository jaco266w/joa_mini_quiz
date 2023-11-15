import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10">
      <h1 className="text-9xl font-extrabold font-serif">Matas</h1>
      <div className="flex gap-2">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      {/* <QuizCard /> */}
      <ProductList />
    </main>
  );
}
