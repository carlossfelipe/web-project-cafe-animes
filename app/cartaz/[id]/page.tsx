import Link from "next/link";

async function getAnime(id: string) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  const anime = await res.json();

  return anime.data;
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Anime({ params }: Props) {
  const { id } = await params;

  const anime = await getAnime(id);

  return (
    <section className="min-h-screen bg-[#111111] text-white px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">{anime.title}</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <img
            src={anime.images.jpg.large_image_url}
            alt={anime.title}
            className="w-80 rounded-2xl shadow-2xl"
          />

          <div className="flex-1">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-zinc-800 px-4 py-2 rounded-xl">
                ⭐ Score: {anime.score || "N/A"}
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-xl">
                ❤️ Favoritos: {anime.favorites}
              </span>

              <span className="bg-zinc-800 px-4 py-2 rounded-xl">
                🎬 Episódios: {anime.episodes || "N/A"}
              </span>
            </div>

            <p className="text-zinc-300 leading-8 text-lg">
              {anime.synopsis || "Sinopse indisponível"}
            </p>

            <div className="mt-8">
              {anime.trailer?.embed_url ? (
                <Link
                  href={anime.trailer.embed_url}
                  target="_blank"
                  className="bg-violet-700 hover:bg-violet-600 transition px-6 py-3 rounded-xl font-semibold inline-block"
                >
                  Ver Trailer
                </Link>
              ) : (
                <button className="bg-zinc-700 px-6 py-3 rounded-xl cursor-not-allowed">
                  Trailer indisponível
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
