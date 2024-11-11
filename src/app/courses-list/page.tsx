"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

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
  ingredientId: number;
  quantity: number;
  unitPricePerQuantity: string;
  Ingredient: Ingredient;
}

interface List {
  id: number;
  date: string;
  total: string;
  ListDetails: ListDetail[];
}

interface DecodedToken {
  userId: number;
  exp: number;
}

const CoursesList = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedListId, setExpandedListId] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("courses_app_cookie");
    console.log(token, "토큰겟");

    // const tokenInLocalStorage = localStorage.getItem("courses_app_cookie");
    // if (tokenInLocalStorage) {
    //     const token = tokenInLocalStorage.substr(1, tokenInLocalStorage.length - 2)
    //   try {
    //     const decodedToken = jwtDecode(token);
    //     const currentTime = Date.now() / (60 * 60 * 24);
    //     if (decodedToken.exp < currentTime) {
    //       router.push('/admin/connexion');
    //     }
    //   } catch (error) {
    //     console.error('Error decoding token:', error);
    //     router.push('/admin/connexion');
    //   }
    // } else {
    //   router.push('/admin/connexion');
    // }

    if (token) {
      try {
        console.log("여기 시작된");
        const decoded = jwtDecode(token);
        console.log(decoded, "decoded");
        setUserId(decoded.id);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  console.log(userId, "userId");

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch("http://localhost:3005/lists/lists");
        const data: List[] = await response.json();
        setLists(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lists:", error);
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  const handleToggleDetails = (listId: number) => {
    setExpandedListId(expandedListId === listId ? null : listId);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {userId && (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Course Lists</h1>
          {lists
            .filter((list) => {
              if (userId !== null) {
                return list.userId === userId;
              }
              return false;
            })
            .map((list) => (
              <div
                key={list.id}
                className="mb-6 p-4 border rounded-lg shadow-lg bg-white"
              >
                <div className="flex justify-between items-center">
                  <strong>Date:</strong> {list.date}
                  <div>
                    <button
                      onClick={() => handleToggleDetails(list.id)}
                      className="text-blue-500 hover:underline"
                    >
                      {expandedListId === list.id
                        ? "Hide Details"
                        : "Show Details"}
                    </button>
                    <button
                      onClick={() =>
                        router.push(`/courses-list-detail/${list.id}`)
                      }
                      className="ml-4 text-green-500 hover:underline"
                    >
                      View Full Details
                    </button>
                  </div>
                </div>
                {expandedListId === list.id && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Details:</h3>
                    {list.ListDetails.map((detail) => (
                      <div key={detail.id} className="mt-2">
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
                      </div>
                    ))}
                    <p className="mt-2 font-bold">Total: {list.total}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CoursesList;
