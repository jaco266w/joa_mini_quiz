import Image from "next/image";
export async function generateMetadata() {}

export default async function ProductCard(props) {
  return (
    <div className="card w-80 p-0 bg-base-100 shadow-xl">
      <figure>
        <Image src="https://images.matas.dk/Assets_v3/700001-800000/747001-748000/747101-747200/747168/product_v1_x2.jpg" alt="Shoes" width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.brand}</h2>
        <p className="text-slate-500">{props.name}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary grow">Læg i kurv</button>
          <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
