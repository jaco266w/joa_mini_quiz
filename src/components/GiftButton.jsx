import Link from "next/link";
export default function GiftButton(props) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="btn btn-primary">
        <Link href="/resultspage">Se Resultat</Link>
      </button>
    </div>
  );
}
