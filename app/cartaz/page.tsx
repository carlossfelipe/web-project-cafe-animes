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
  const [url, setUrl] = useState("https://api.jikan.moe/v4/seasons/now?limit=20");

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
    <div className="bg-zinc-950 min-h-screen w-full text-white overflow-x-hidden">
      {/* NAVBAR RESPONSIVA */}
      <nav className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-20 md:h-16 bg-[#121212] items-center justify-between px-6 py-4 md:py-0 w-full">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent whitespace-nowrap">
          CafeAnimes
        </h1>
        
        {/* Links centralizados/adaptados */}
        <div className="text-[16px] md:text-[18px] w-full md:w-auto overflow-x-auto no-scrollbar">
          <ul className="flex justify-center gap-5 sm:gap-7 whitespace-nowrap text-zinc-300">
            <li className="hover:text-white transition-colors">
              <Link href={'/'}>início</Link>
            </li>
            <li 
              className="cursor-pointer hover:text-white transition-colors" 
              onClick={() => setUrl("https://api.jikan.moe/v4/seasons/now")}
            >
              lançamentos
            </li>
            <li 
              className="cursor-pointer hover:text-white transition-colors" 
              onClick={() => setUrl("https://api.jikan.moe/v4/top/anime")}
            >
              populares
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              contato
            </li>
          </ul>
        </div>

        {/* Input de Busca */}
        <div className="w-full md:w-auto md:max-w-xs flex items-center">
          <input
            type="text"
            placeholder="Buscar anime..."
            className="bg-white w-full h-9 rounded-[5px] text-black px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </nav>

      {/* SEÇÃO PRINCIPAL */}
      <section className="flex justify-center mt-6 md:mt-10 mb-20">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          
          {/* Header do Filtro */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">ANIME TRACKER</h1>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <label
                htmlFor="filtro-anime"
                className="text-xs md:text-sm font-bold text-zinc-400 whitespace-nowrap"
              >
                FILTRAR POR:
              </label>

              <select
                id="filtro-anime"
                className="bg-zinc-800 text-white px-3 py-1.5 text-sm rounded cursor-pointer border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-purple-500"
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="tv">Séries de TV</option>
                <option value="movie">Filmes</option>
                <option value="ova">OVAs</option>
              </select>
            </div>
          </div>

          {/* GRID DE ANIMES TOTALMENTE FLUIDO */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 mt-8">
            {animes.map((anime, index) => {
              const chaveUnica = anime.mal_id
                ? `${anime.mal_id}-${index}`
                : `anime-${index}`;
              return (
                <div
                  key={chaveUnica}
                  className="w-full text-white cursor-pointer group flex flex-col"
                >
                  <Link href={`/cartaz/${anime.mal_id}`} className="flex flex-col h-full">
                    {/* Container da Imagem com Aspect Ratio Seguro */}
                    <div className="overflow-hidden rounded shadow-lg bg-zinc-900 aspect-[2/3] w-full relative">
                      <img
                        src={anime.images?.jpg?.image_url}
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    </div>

                    {/* Texto informativo */}
                    <div className="mt-2.5 flex flex-col flex-grow">
                      <h1
                        className="text-xs md:text-sm font-semibold line-clamp-2 group-hover:text-purple-400 transition-colors"
                        title={anime.title}
                      >
                        {anime.title}
                      </h1>
                      <h2 className="text-[11px] md:text-xs text-zinc-400 mt-auto pt-1">
                        Ano: {anime.year || "N/A"}
                      </h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Estado Vazio (Caso a busca não retorne nada) */}
          {animes.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              Nenhum anime encontrado para a sua busca.
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Cartaz;