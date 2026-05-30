"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Anime = {
  mal_id: number;
  title: string;
  year: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

function Cartaz() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [busca, setBusca] = useState<string>(""); 
  const [tipo, setTipo] = useState<string>("tv");
  const [url, setUrl] = useState("https://api.jikan.moe/v4/seasons/now?limit=20")
   

  useEffect(() => {

    if (busca.trim() !== "") {
      setUrl(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(busca)}&type=${tipo}&status=complete&sfw`);
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao acessar a API");
        return res.json();
      })
      .then((resposta) => {
        if (resposta && resposta.data) {
          setAnimes(resposta.data);
        }
      })
      .catch((erro) => {
        console.error("Erro na Jikan API:", erro);
      });
  }, [busca, tipo, url]);

  return (
    <>
      <nav className="flex text-white w-screen gap-10 h-13 bg-[#262626] items-center px-12 w-screen">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent">
          CafeAnimes
        </h1>
        <div className="m-auto text-[18px]">
          <ul className="flex gap-7 ">
            <li><Link href={'/'}>inicio</Link></li>
            <li onClick={() => {setUrl("https://api.jikan.moe/v4/seasons/now")}}>lançamentos</li>
            <li onClick={() => {setUrl("https://api.jikan.moe/v4/top/anime")}}>populares</li>
            <li>contato</li>
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <input
            type="text"
            className="bg-white w-150 h-7 rounded-[5px] text-black"
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </nav>
      <section className="flex justify-center mt-10">
        <div className="w-full max-w-5xl px-4">
          <div className="flex justify-between items-center text-white border-b border-zinc-800 pb-4">
            <h1 className="text-3xl font-bold tracking-tight">ANIME TRACKER</h1>

            <div className="flex items-center gap-3">
              <label
                htmlFor="filtro-anime"
                className="text-sm font-bold text-zinc-400"
              >
                FILTRAR POR:
              </label>

              <select
                id="filtro-anime"
                className="bg-zinc-800 text-white px-3 py-1.5 rounded cursor-pointer border border-zinc-700"
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="tv">Séries de TV</option>
                <option value="movie">Filmes</option>
                <option value="ova">OVAs</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 mt-10">
            {animes.map((anime, index) => {
              const chaveUnica = anime.mal_id
                ? `${anime.mal_id}-${index}`
                : `anime-${index}`;
              return (
                <div
                  key={chaveUnica}
                  className="w-40 text-white cursor-pointer group"
                >
                  <Link href={`/cartaz/${anime.mal_id}`}>
                    <div className="overflow-hidden rounded shadow-lg bg-zinc-800 h-60 w-40">
                      <img
                        src={anime.images?.jpg?.image_url}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>

                    <div className="mt-3">
                      <h1
                        className="text-sm font-semibold line-clamp-2"
                        title={anime.title}
                      >
                        {anime.title}
                      </h1>
                      <h2 className="text-xs text-zinc-400 mt-1">
                        Ano: {anime.year || "N/A"}
                      </h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cartaz;
