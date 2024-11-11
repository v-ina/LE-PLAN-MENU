"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  id: number;
  label: string;
}

interface Unit {
  id: number;
  label: string;
}

interface Ingredient {
  id: number;
  label: string;
  unitId: number;
  categoryId: number;
  unitPrice: string;
  Category: Category;
  Unit: Unit;
}

interface ListDetail {
  id: number;
  listId: number;
  ingredientId: number;
  quantity: number;
  unitPrice: string;
  unitPricePerQuantity: string;
  Ingredient: Ingredient;
}

interface RecetteDetailModalProps {
  recetteId: number | null;
  onClose: () => void;
}

const fetchListDetails = async (
  recetteId: number
): Promise<{ ListDetails: ListDetail[] } | null> => {
  try {
    const res = await fetch(`http://localhost:3005/lists/lists/${recetteId}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching list details:", error);
    return null;
  }
};

const RecetteDetailModal: React.FC<RecetteDetailModalProps> = ({
  recetteId,
  onClose,
}) => {
  const [listDetails, setListDetails] = useState<ListDetail[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (recetteId) {
      setLoading(true);
      fetchListDetails(recetteId).then((data) => {
        setListDetails(data?.ListDetails || null);
        setLoading(false);
      });
    }
  }, [recetteId]);

  if (!recetteId) return null;

  const handleOutsideClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className="modal fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div
        className="w-[80vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-200 p-10 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <p className="uppercase font-semibold text-xl">Nom de la Recette</p>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="flex gap-10 mt-6">
          <div className="bg-zinc-500 rounded-2xl w-[30vw] h-60"></div>
          <div>
            <p className="font-semibold uppercase mb-2">Les Ingredients</p>
            <ul className="list-disc ml-4">
              {listDetails?.map((detail) => (
                <li key={detail.id}>
                  {detail.Ingredient.label} {detail.quantity}{" "}
                  {detail.Ingredient.Unit.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-semibold uppercase mb-2">Recette</p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non labore obcaecati.
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
          >
            + Add to Mon List
          </button>
          <button
            type="button"
            className="bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
          >
            + Add to Mon Favoris
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="p-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>

        <Link
          href="/courses-list"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Go to main list
        </Link>
      </div>
    </div>
  );
};

export default RecetteDetailModal;
