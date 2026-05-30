import Link from "next/link";

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

type CarrosselProps = {
  animes: Anime[];
};

export default function Carrossel({ animes }: CarrosselProps) {
  return (
    <div className="overflow-hidden w-full py-10 bg-black">
      <div className="flex w-max animate-scroll gap-6">
        {/* primeira lista */}
        {animes.map((anime) => (
          <Link href={`/cartaz/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
              className="w-52 h-72 object-cover rounded-2xl hover:scale-105 transition"
            />
          </Link>
        ))}

        {/* duplicada para infinito */}
        {animes.map((anime) => (
          <Link href={`/cartaz/${anime.mal_id}`} key={`${anime.mal_id}-clone`}>
            <img
              src={anime.images?.jpg?.image_url}
              alt={anime.title}
              className="w-52 h-72 object-cover rounded-2xl hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
