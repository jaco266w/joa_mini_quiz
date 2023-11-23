"use client";

export default function TryAgainBtn() {
  return (
    <button
      className="btn btn-primary btn-xl w-fit"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Prøv Igen
    </button>
  );
}
