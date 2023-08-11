import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Albums" }];

export default function Albums() {
  return (
    <main>
      <div className="relative min-h-screen bg-black sm:flex sm:items-center sm:justify-center">
        <div className="relative sm:pb-16 sm:pt-8">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://lastfm.freetls.fastly.net/i/u/ar0/39277c12fe2c2f24a5f005aa16263d96.jpg"
                  alt="Old Iron Maiden lineup"
                />
                <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
              </div>
              <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
                <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                  <span className="block uppercase text-yellow-500 drop-shadow-md">
                    Albums
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765479/ironmaiden/albums/1-ironmaiden.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765479/ironmaiden/albums/2-killers.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765480/ironmaiden/albums/3-numberofthebeast.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765480/ironmaiden/albums/4-pieceofmind.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765480/ironmaiden/albums/5-powerslave.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765480/ironmaiden/albums/6-somewhereintime.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://res.cloudinary.com/dmztdsduf/image/upload/v1691765480/ironmaiden/albums/7-seventhsonofaseventhson.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
