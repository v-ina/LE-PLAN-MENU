export default function AddRecetteModal() {
  return (
    <div className="w-full px-10 py-10 ">
      <h2>ajouter une recette</h2>
      {/* 이미지 파일 드래그앤 드랍하기 */}
      {/* 이건 그냥 홈페이지에다가 두자. 여러개 한꺼번에 전송 가능하게 할건지도 생각해보자 */}
      <textarea
        name=""
        id=""
        className="block w-full bg-zinc-100 my-5 py-5 px-10"
        placeholder="ajouter une url / copie colle / ou ecrit a la main / add une image"
      ></textarea>
      <button
        type="button"
        // onClick={handleAddItem}
        className=" bg-maingreen text-white py-2 px-4 rounded hover:bg-deepgreen"
      >
        + Add Recette
      </button>
    </div>
  );
}
