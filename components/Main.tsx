import Link from "next/link";

const Main = () => {
  return (
    <div className="mb-20">
      <div className="flex h-[20vh] sm:h-[45vh] thumnail_image">
        <div className="flex w-full my-auto justify-start">
          <div className="sm:ml-[10vw] p-4 sm:p-0">
            <p className="text-lg text-black">
              สวัสดี! นี้คือเว็บไซต์อย่างเป็นทางการของ !VARIZ
            </p>
            <h1 className="text-4xl sm:text-6xl text-amber-400 font-bold drop-shadow-sm">
              Anime & Developer
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-amber-200 p-6">
        <div className="container mx-auto">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">มาทำความรู้จักกันดีกว่า!</h1>
            <p className="text-xs">ถ้าอยากรู้จักตัวตนของผม ก็ไปติดตามช่องทางเหล่านี้ได้เลย!!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
