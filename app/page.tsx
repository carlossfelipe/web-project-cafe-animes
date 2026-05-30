"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import banner from "../public/banner.png";
import Carrossel from "./carrossel";

function Mensal() {
  return (
    <div className="grid md:grid-cols-2 mt-16 max-w-2xl mx-auto place-items-center">
      <div className="min-w-75 w-75 min-h-100 h-auto p-10 rounded-2xl  bg-transparent border border-violet-700">
        <h3 className="text-3xl font-bold text-center pb-2">Premium</h3>
        <h3 className="text-2xl font-bold text-center ">R$ 19,99/Mês</h3>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Sem anúncios</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Acesso completo</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Offline Viewing</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />

            <p>
              <span className="text-purple-400 font-bold">1 dispositivo</span>{" "}
              simultâneo
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto pt-5">
          <button className="px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>

      <div className="min-w-75 w-75 min-h-100 h-auto p-10 rounded-2xl bg-transparent border border-violet-700 flex flex-col">
        <h3 className="text-3xl font-bold text-center pb-2">Favoritos</h3>

        <h3 className="text-2xl font-bold text-center">R$ 24,99/Mês</h3>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Sem anúncios</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Acesso completo</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Offline Viewing</p>
          </div>

          <div className="flex items-start gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />

            <p>
              <span className="text-purple-400 font-bold">4 dispositivos</span>{" "}
              simultâneos
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-auto pt-8">
          <button className="px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>
    </div>
  );
}
function Anual() {
  return (
    <div className="grid md:grid-cols-2 mt-16 max-w-2xl mx-auto place-items-center">
      <div className="min-w-75 w-75 min-h-100 h-auto p-10 rounded-2xl  bg-transparent border border-violet-700">
        <h3 className="text-3xl font-bold text-center pb-2">Premium</h3>
        <h3 className="text-2xl font-bold text-center ">R$ 199,99/Mês</h3>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Sem anúncios</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Acesso completo</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Offline Viewing</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />

            <p>
              <span className="text-purple-400 font-bold">1 dispositivo</span>{" "}
              simultâneo
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto pt-5">
          <button className="px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
            Indisponível
          </button>
        </div>
      </div>

      <div className="min-w-75 w-75 min-h-100 h-auto p-10 rounded-2xl bg-transparent border border-violet-700 flex flex-col">
        <h3 className="text-3xl font-bold text-center pb-2">Favoritos</h3>

        <h3 className="text-2xl font-bold text-center">R$ 229,99/Mês</h3>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Sem anúncios</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Acesso completo</p>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />
            <p>Offline Viewing</p>
          </div>

          <div className="flex items-start gap-2 text-zinc-400">
            <Check className="text-violet-700 w-4 h-4" />

            <p>
              <span className="text-purple-400 font-bold">4 dispositivos</span>{" "}
              simultâneos
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-auto pt-8">
          <button className="px-6 py-3 rounded-full bg-gray-500 transition font-semibold shadow-lg shadow-purple-900/40 cursor-not-allowed">
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
    <main className="bg-zinc-950 min-h-screen text-white bg">
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent">
            CafeAnimes
          </h1>

          <div className="flex gap-4">
            {/* BOTÃO */}
            <Link
              href="/cadastro"
              className="px-6 py-3 rounded-full bg-transparent border border-violet-700 hover:scale-102 transition font-semibold shadow-lg shadow-purple-900/40 text-violet-400 cursor-pointer"
            >
              Cadastrar
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-full bg-violet-700 hover:scale-102 transition font-semibold shadow-lg shadow-purple-900/40 cursor-pointer"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="h-[110vh] flex items-center justify-start px-20 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(to right, black, transparent),
          url(${banner.src})`,
        }}
      >
        <div className="text-start max-w-5xl items-end">
          <h1 className="text-6xl font-bold">
            Descubra novos animes e <br />
            Explore um universo
            <br />
            Completo feito para fãs.
          </h1>

          <p className="mt-6 text-xl text-zinc-300 leading-8">
            Junte-se a nós!
          </p>

          <div className="mt-10 flex justify-start gap-5">
            <Link href={`/cartaz`}>
              <button className=" px-10 py-7 rounded-full bg-[#38225c] hover:bg-[#4a2d7a] transition text-2xl font-[Inter] cursor-pointer">
                EXPLORAR
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="bg-black py-24 px-10">
        <h2 className="text-5xl font-bold text-center">Em destaque</h2>

        <Carrossel animes={animes} />
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 px-10 bg-black">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Funcionalidades</h2>
        </div>

        <div className="w-full flex justify-center mt-10">
          <ul className="flex gap-4 bg-black p-2 rounded-full border border-violet-700/40">
            <li>
              <button
                onClick={() => setPlanos(false)}
                className={`cursor-pointer px-8 py-3 rounded-full transition font-semibold ${
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
                className={`cursor-pointer px-8 py-3 rounded-full transition font-semibold ${
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
      <section className="bg-black py-24 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center ">
          <img
            src="https://static.animecorner.me/2023/08/1693494180-58087.png"
            alt="anime"
            className="rounded-2xl w-full h-[500px] object-cover"
          />

          <div>
            <h2 className="text-5xl font-bold">
              Um site feito para fãs de anime
            </h2>

            <p className="mt-8 text-zinc-300 leading-8 text-lg">
              Veja informações completas, descubra novos títulos, acompanhe
              temporadas e organize seus animes favoritos em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-28 text-center px-10">
        <h2 className="text-6xl font-bold">Comece agora</h2>

        <p className="mt-6 text-zinc-400 text-xl">
          Entre para a comunidade e descubra novos animes todos os dias.
        </p>

        <Link href="/cadastro">
          <button className="mt-10 px-8 py-4 rounded-4xl bg-[#38225c] hover:bg-[#4a2d7a] transition cursor-pointer">
            Criar Conta
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center text-zinc-500">
        © 2026 CafeAnime - Todos os direitos reservados
      </footer>
    </main>
  );
}
