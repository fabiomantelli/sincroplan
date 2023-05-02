import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mobile from "./components/Mobile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        {/* h-187 w-320  */}
        <div className="relative flex items-center justify-center">
          <figure>
            <Image
              src={`/images/eolic-energy-wide.png`}
              alt="Energia Eólica"
              width={1280}
              height={748}
              className="top-0 object-cover h-mobile"
              priority
            />
          </figure>
          <div className="absolute pl-6 pr-6 md:pl-16 pt-28 z-10 h-full w-full max-w-7xl">
            <h1 className="text-white text-4xl">
              MEDIÇÃO SINCRONIZADA DE FASORES
            </h1>
          </div>
        </div>
        <div className="max-w-7xl border-red-500 border-2">
        <hr className="border-none h-4 bg-[#fad9a0] " />
        </div>
        <div className="flex items-center justify-center">
          <p className="p-6 max-w-7xl">
            &quot;O monitoramento com medição sincronizada de fasores oferece
            uma visão clara e abrangente do desempenho do seu sistema de energia
            elétrica. Permite a detecção precoce de falhas, bem como a tomada de
            decisões para maximizar a eficiência operacional e reduzir os custos
            de manutenção.&quot;
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <p className="p-6 max-w-7xl leading-7 sm:text-lg bg-[#fad9a0]">
            Bem-vindo à SincroPlan Engenharia, especializada em medição
            sincronizada de fasores. Nós oferecemos soluções personalizadas para
            empresas do setor elétrico que precisam de um acompanhamento
            operacional do sistema de medição, bem como a identificação de
            possíveis melhorias para otimizar o desempenho do sistema.
          </p>
        </div>
      </main>
      <Mobile />
      <Footer />
    </>
  );
}
