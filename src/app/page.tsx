import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#F9F5EE] ">
      <Navbar />
      {/* h-187 w-320  */}
      <div className="relative flex items-center justify-center border-red-500 border-2">
        <Image
          src={`/images/eolic-energy-wide.png`}
          alt="Energia Eólica"
          width={1280}
          height={748}
        />
        <div className="absolute pl-8 pr-8 md:pl-16 pt-28 z-10 h-full w-full max-w-7xl">
          <h1 className="text-white text-4xl">
            MEDIÇÃO SINCRONIZADA DE FASORES
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <p className=" p-8 max-w-7xl">
        &quot;O monitoramento com medição sincronizada de fasores oferece uma
        visão clara e abrangente do desempenho do seu sistema de energia
        elétrica. Permite a detecção precoce de falhas, bem como a tomada de
        decisões para maximizar a eficiência operacional e reduzir os custos de
        manutenção.&quot;
      </p>
        </div>
    </main>
  );
}
