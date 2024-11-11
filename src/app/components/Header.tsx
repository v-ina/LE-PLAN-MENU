import Image from "next/image";

export default function Header() {
  return (
    <nav className="w-full px-10 py-5 bg-transparent font-bold uppercase">
      <ul className="flex gap-10 items-center">
        <li>
          <a href="/">
            <Image
              src="/assets/img/mainlogo.png"
              alt="logo"
              width="60"
              height="60"
            />
          </a>
        </li>
        <li className="ms-auto">
          <a href="recettes" className="hover:opacity-50">
            recettes
          </a>
        </li>
        {/* <li><a href="add recette" className="hover:opacity-50">add recettes</a></li> */}
        <li>
          <a href="my-list" className="hover:opacity-50">
            my list
          </a>
        </li>
        <li>
          <a href="mypage" className="hover:opacity-50">
            my page
          </a>
        </li>
        <li>
          <a href="" className="hover:opacity-50">
            log out
          </a>
        </li>
      </ul>
    </nav>
  );
}
