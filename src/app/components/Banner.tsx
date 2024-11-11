type BannerProps = {
  title: string;
};

export default function Banner({ title }: BannerProps) {
  return (
    <div className=" bg-[url('/assets/img/bg-lightgreen.JPG')] bg-cover bg-center w-full h-80 flex items-center px-10">
      <h1 className="uppercase text-[50px] font-extrabold">{title}</h1>
    </div>
  );
}
