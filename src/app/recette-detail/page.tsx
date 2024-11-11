"use client";

export default function RecetteDetail() {
  return (
    <div className=" w-[80vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="bg-zinc-200 w-full flex flex-col gap-10 px-10 py-10">
        {/* <h1 className="uppercase text-[50px] font-extrabold">detail - <span className="">nom de la recette</span></h1> */}
        <div className="flex justify-between items-center">
          <p className="uppercase font-semibold text-xl">nom de la recette</p>
          <div className="flex gap-4">
            <button
              type="button"
              // onClick={handleAddItem}
              className=" bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
            >
              edit
            </button>
            <button
              type="button"
              // onClick={handleAddItem}
              className=" bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
            >
              delete
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-zinc-500 rounded-2xl w-[30vw] h-60"></div>
          <div>
            <p className="font-semibold uppercase mb-2">les ingredients</p>
            <ul className="list-disc">
              <li className="ms-4"> boeuf 100g</li>
              <li className="ms-4"> pomme de terre 1kg</li>
              <li className="ms-4">pomme 3</li>
              <li className="ms-4">onigon 1</li>
              <li className="ms-4"> pomme de terre 1kg</li>
              <li className="ms-4">pomme 3</li>
              <li className="ms-4">onigon 1</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase mb-2">recette</p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="mb-2">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            non labore obcaecati.
          </p>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            // onClick={handleAddItem}
            className=" bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
          >
            + Add Mon List
          </button>

          <button
            type="button"
            // onClick={handleAddItem}
            className=" bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
          >
            + Add Mon Favoris
          </button>
        </div>
      </div>
    </div>
  );
}
