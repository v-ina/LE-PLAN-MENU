import Link from "next/link";
import { notFound } from "next/navigation";

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

async function fetchListDetails(listId: string) {
  const res = await fetch(`http://localhost:3005/lists/lists/${listId}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

interface Props {
  params: {
    listId: string;
  };
}

export default async function CoursesListDetail({ params }: Props) {
  const listId = params.listId;
  const listDetails = await fetchListDetails(listId);

  if (!listDetails || !Array.isArray(listDetails.ListDetails)) {
    notFound();
  }

  return (
    <div>
      <h1>Details for List ID: {listId}</h1>
      <ul>
        {listDetails.ListDetails.map((detail: ListDetail) => (
          <li key={detail.id}>
            <p>
              <strong>Ingredient:</strong> {detail.Ingredient.label}
            </p>
            <p>
              <strong>Quantity:</strong> {detail.quantity}
            </p>
            <p>
              <strong>Unit:</strong> {detail.Ingredient.Unit.label}
            </p>
            <p>
              <strong>Price:</strong> {detail.unitPricePerQuantity}
            </p>
          </li>
        ))}

        <Link href="/courses-list">go to main list</Link>
      </ul>
    </div>
  );
}
