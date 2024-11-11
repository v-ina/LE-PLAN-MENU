"use client";
import { useState, useEffect } from "react";

interface Ingredient {
  name: string;
  unitId: number;
  categoryId: number;
  unitPrice: string;
}

interface Category {
  id: number;
  label: string;
}

interface Unit {
  id: number;
  label: string;
}

const AddList = () => {
  const [isNewList, setIsNewList] = useState<boolean>(true);
  const [listId, setListId] = useState<number | null>(null);
  const [items, setItems] = useState<Ingredient[]>([
    { name: "", unitId: 0, categoryId: 0, unitPrice: "" },
  ]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3005/categories");
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchUnits = async () => {
      try {
        const response = await fetch("http://localhost:3005/units");
        const data: Unit[] = await response.json();
        setUnits(data);
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };

    fetchCategories();
    fetchUnits();
  }, []);

  const handleListIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setListId(Number(event.target.value));
  };

  const handleItemChange = <K extends keyof Ingredient>(
    index: number,
    field: K,
    value: Ingredient[K]
  ) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: "", unitId: 0, categoryId: 0, unitPrice: "" }]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = { listId, items };

    try {
      const response = await fetch("http://localhost:3005/lists/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("List added successfully!");
        setItems([{ name: "", unitId: 0, categoryId: 0, unitPrice: "" }]);
      } else {
        alert("Failed to add the list.");
      }
    } catch (error) {
      console.error("Error adding list:", error);
      alert("An error occurred while adding the list.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New List</h1>

      <div className="mb-4 text-center">
        <button
          onClick={() => setIsNewList(true)}
          className={`py-2 px-4 rounded ${
            isNewList ? "bg-deepgreen text-white" : "bg-gray-300"
          }`}
        >
          새 목록 추가
        </button>
        <button
          onClick={() => setIsNewList(false)}
          className={`py-2 px-4 rounded ${
            !isNewList ? "bg-deepgreen text-white" : "bg-gray-300"
          }`}
        >
          기존 목록에 추가
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isNewList && (
          <div className="flex flex-col space-y-2">
            <label htmlFor="listId" className="font-semibold">
              List ID:
            </label>
            <select
              id="listId"
              value={listId ?? ""}
              onChange={handleListIdChange}
              className="border rounded p-2"
            >
              <option value="" disabled>
                Select List ID
              </option>
              <option value="1">List 1</option>
              <option value="2">List 2</option>
            </select>
          </div>
        )}

        {items.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <h3 className="text-lg font-bold">Item {index + 1}</h3>
            <div className="flex flex-col space-y-2">
              <label htmlFor={`name-${index}`} className="font-semibold">
                Ingredient Name:
              </label>
              <input
                type="text"
                id={`name-${index}`}
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, "name", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor={`unitId-${index}`} className="font-semibold">
                Unit:
              </label>
              <select
                id={`unitId-${index}`}
                value={item.unitId}
                onChange={(e) =>
                  handleItemChange(index, "unitId", Number(e.target.value))
                }
                className="border rounded p-2"
              >
                <option value="0" disabled>
                  Select Unit
                </option>
                {units.map((unit) => (
                  <option key={unit.id} value={unit.id}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor={`categoryId-${index}`} className="font-semibold">
                Category:
              </label>
              <select
                id={`categoryId-${index}`}
                value={item.categoryId}
                onChange={(e) =>
                  handleItemChange(index, "categoryId", Number(e.target.value))
                }
                className="border rounded p-2"
              >
                <option value="0" disabled>
                  Select Category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor={`unitPrice-${index}`} className="font-semibold">
                Unit Price:
              </label>
              <input
                type="text"
                id={`unitPrice-${index}`}
                value={item.unitPrice}
                onChange={(e) =>
                  handleItemChange(index, "unitPrice", e.target.value)
                }
                className="border rounded p-2"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddItem}
          className="bg-maingreen text-white font-semibold py-2 px-4 rounded hover:bg-deepgreen"
        >
          + Add Item
        </button>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
          >
            Submit List
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
