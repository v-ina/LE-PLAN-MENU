"use client";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MyList() {
  const handleAddItem = () => {
    console.log("add item");
  };
  return (
    <>
      <Header />

      <div className="">
        {/* <div className="bg-zinc-200 w-full h-80 flex items-center px-10">
          <h1 className="uppercase text-[50px] font-extrabold">My list</h1>
        </div> */}

        <Banner title="My List" />

        <div className="w-full px-10 py-10 ">
          <button
            type="button"
            onClick={handleAddItem}
            className=" bg-deepgreen text-white py-2 px-4 rounded hover:bg-maingreen"
          >
            + Add Item
          </button>
          <div className="flex flex-col gap-10 px-10 my-10">
            <div className="flex justify-between  uppercase font-semibold">
              <input type="checkbox" name="" id="" checked />
              <p>nom d&apos;ingredient</p>
              <p>quantité</p>
              <p>unité</p>
              <p>prix (fac) </p>
            </div>
          </div>

          <ul className="flex flex-col gap-10 px-10 ">
            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>carotte</p>
              <p>3</p>
              <p>vrac</p>
              <p>2 E </p>
            </li>

            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>beouf</p>
              <p>400</p>
              <p>g</p>
              <p>10 E </p>
            </li>

            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>biere</p>
              <p>2</p>
              <p>pack</p>
              <p>8 E </p>
            </li>

            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>carotte</p>
              <p>3</p>
              <p>vrac</p>
              <p>2 E </p>
            </li>

            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>beouf</p>
              <p>400</p>
              <p>g</p>
              <p>10 E </p>
            </li>

            <li className="flex justify-between text-right ">
              <input type="checkbox" name="" id="" />
              <p>biere</p>
              <p>2</p>
              <p>pack</p>
              <p>8 E </p>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
