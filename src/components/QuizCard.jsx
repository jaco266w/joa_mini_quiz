"use client";

import Image from "next/image";
import Modal from "./Modal";

export default function QuizCard() {
	return (
		<>
			<div
				className="card w-96 shadow-xl bg-accent"
				onClick={() => document.getElementById("my_modal_3").showModal()}
			>
				<figure>
					<Image
						className="object-cover h-56"
						width={500}
						height={500}
						src="/quiz.png"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<p className="uppercase">Hjælp til gaven?</p>
					<h2 className="card-title font-serif capitalize text-2xl">
						Gaven til den eneste ene
					</h2>
				</div>
			</div>
			<Modal />
		</>
	);
}