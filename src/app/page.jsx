import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <header className="w-full py-6 px-6">
        <h1 className="text-4xl font-medium font-serif">Matas</h1>
      </header>
      <main className="flex min-h-screen container mx-auto flex-col items-start justify-start gap-6 px-6">
        <ProductList />
      </main>
    </>
  );
}
