

function Cadastro() {


  return (
    // O h-screen e w-screen centralizam o form na tela. O bg-#121212 é o fundo escuro.
    <section className="bg-[#121212] text-white h-screen w-screen flex items-center justify-center p-4">
      <form
        action=""
        className="bg-[#1e1e1e] w-full max-w-[400px] p-8 rounded-2xl flex flex-col gap-6 shadow-2xl"
      >
        {/* Título com margem inferior extra (mb-2) */}
        <h1 className="text-center text-4xl font-normal mb-2">Cadastre-se</h1>

        {/* Caixa dos Inputs com gap-4 (espaço entre o username e o password) */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#272727] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none"
          />
          <input
            type="text"
            placeholder="username"
            className="bg-[#272727] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-[#272727] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none"
          />
          <input
            type="password"
            placeholder="confirm password"
            className="bg-[#272727] text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none"
          />
        </div>

        {/* Botão Entrar - py-3 dá a altura dele */}
        <button
          type="submit"
          className="bg-[#38225c] hover:bg-[#4a2d7a] text-white py-3 rounded-xl font-medium transition-colors lowercase"
        >
          cadastrar
        </button>

        
      </form>
    </section>
  );
}

export default Cadastro;
