"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import banner from "../public/banner.png";
import Carrossel from "./carrossel";

function Mensal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto place-items-center px-4">
      {/* Premium */}
      <div className="w-full max-w-sm min-h-[400px] flex flex-col justify-between p-8 rounded-2xl bg-transparent border border-violet-700">
        <div>
          <h3 className="text-3xl font-bold text-center pb-2">Premium</h3>
          <h3 className="text-2xl font-bold text-center">R$ 19,99/Mês</h3>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Sem anúncios</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Acesso completo</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Offline Viewing</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>
                <span className="text-purple-400 font-bold">1 dispositivo</span>{" "}
                simultâneo
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 mt-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>

      {/* Favoritos */}
      <div className="w-full max-w-sm min-h-[400px] flex flex-col justify-between p-8 rounded-2xl bg-transparent border border-violet-700">
        <div>
          <h3 className="text-3xl font-bold text-center pb-2">Favoritos</h3>
          <h3 className="text-2xl font-bold text-center">R$ 24,99/Mês</h3>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Sem anúncios</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Acesso completo</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Offline Viewing</p>
            </div>
            <div className="flex items-start gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0 mt-1" />
              <p>
                <span className="text-purple-400 font-bold">4 dispositivos</span>{" "}
                simultâneos
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 mt-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>
    </div>
  );
}

function Anual() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto place-items-center px-4">
      {/* Premium Anual */}
      <div className="w-full max-w-sm min-h-[400px] flex flex-col justify-between p-8 rounded-2xl bg-transparent border border-violet-700">
        <div>
          <h3 className="text-3xl font-bold text-center pb-2">Premium</h3>
          <h3 className="text-2xl font-bold text-center">R$ 199,99/Ano</h3>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Sem anúncios</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Acesso completo</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Offline Viewing</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>
                <span className="text-purple-400 font-bold">1 dispositivo</span>{" "}
                simultâneo
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 mt-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>

      {/* Favoritos Anual */}
      <div className="w-full max-w-sm min-h-[400px] flex flex-col justify-between p-8 rounded-2xl bg-transparent border border-violet-700">
        <div>
          <h3 className="text-3xl font-bold text-center pb-2">Favoritos</h3>
          <h3 className="text-2xl font-bold text-center">R$ 229,99/Ano</h3>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Sem anúncios</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Acesso completo</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0" />
              <p>Offline Viewing</p>
            </div>
            <div className="flex items-start gap-2 text-zinc-400">
              <Check className="text-violet-700 w-4 h-4 flex-shrink-0 mt-1" />
              <p>
                <span className="text-purple-400 font-bold">4 dispositivos</span>{" "}
                simultâneos
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 mt-auto">
          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>
    </div>
  );
}

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export default function Home() {
  const [planos, setPlanos] = useState(false);
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/2026/winter?limit=10")
      .then((res) => res.json())
      .then((animes) => setAnimes(animes.data));
  }, []);

  return (
    <main className="bg-zinc-950 min-h-screen text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent">
            CafeAnimes
          </h1>

          <div className="flex gap-2 sm:gap-4">
            <Link
              href="/cadastro"
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full bg-transparent border border-violet-700 hover:scale-102 transition font-semibold shadow-lg shadow-purple-900/40 text-violet-400 cursor-pointer"
            >
              Cadastrar
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full bg-violet-700 hover:scale-102 transition font-semibold shadow-lg shadow-purple-900/40 cursor-pointer"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen pt-20 flex items-center justify-start px-6 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4)), url(${banner.src})`,
        }}
      >
        <div className="text-start max-w-3xl mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-none">
            Descubra novos animes e <br className="hidden sm:inline" />
            Explore um universo <br className="hidden sm:inline" />
            Completo feito para fãs.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-8">
            Junte-se a nós!
          </p>

          <div className="mt-10 flex justify-start">
            <Link href={`/cartaz`}>
              <button className="w-full sm:w-auto px-8 py-5 md:px-10 md:py-7 rounded-full bg-[#38225c] hover:bg-[#4a2d7a] transition text-xl md:text-2xl font-[Inter] cursor-pointer">
                EXPLORAR
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Em destaque</h2>
        <Carrossel animes={animes} />
      </section>

      {/* SERVIÇOS / FUNCIONALIDADES */}
      <section className="py-16 md:py-24 px-4 md:px-10 bg-black">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Funcionalidades</h2>
        </div>

        <div className="w-full flex justify-center mt-10">
          <ul className="flex gap-2 bg-black p-1.5 rounded-full border border-violet-700/40">
            <li>
              <button
                onClick={() => setPlanos(false)}
                className={`cursor-pointer px-6 py-2.5 sm:px-8 sm:py-3 rounded-full transition text-sm sm:text-base font-semibold ${
                  !planos
                    ? "bg-violet-700 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
            </li>
            <li>
              <button
                onClick={() => setPlanos(true)}
                className={`cursor-pointer px-6 py-2.5 sm:px-8 sm:py-3 rounded-full transition text-sm sm:text-base font-semibold ${
                  planos
                    ? "bg-violet-700 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Anual
              </button>
            </li>
          </ul>
        </div>

        {planos ? <Anual /> : <Mensal />}
      </section>

      {/* SOBRE */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <img
            src="https://static.animecorner.me/2023/08/1693494180-58087.png"
            alt="anime"
            className="rounded-2xl w-full h-[300px] md:h-[500px] object-cover"
          />

          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-bold">
              Um site feito para fãs de anime
            </h2>
            <p className="mt-6 md:mt-8 text-zinc-300 leading-8 text-base md:text-lg">
              Veja informações completas, descubra novos títulos, acompanhe
              temporadas e organize seus animes favoritos em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28 text-center px-4 md:px-10">
        <h2 className="text-4xl md:text-6xl font-bold">Comece agora</h2>
        <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-md mx-auto">
          Entre para a comunidade e descubra novos animes todos os dias.
        </p>

        <Link href="/cadastro">
          <button className="mt-10 px-8 py-4 rounded-full bg-[#38225c] hover:bg-[#4a2d7a] transition cursor-pointer">
            Criar Conta
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center text-zinc-500 text-sm border-t border-zinc-900">
        © 2026 CafeAnime - Todos os direitos reservados
      </footer>
    </main>
  );
}