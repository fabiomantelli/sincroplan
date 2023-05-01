import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Image src="/images/eolic-energy.png" alt="Energia Eólica" width={545} height={318} />
      <p className="p-8">
        &quot;O monitoramento com medição sincronizada de fasores oferece uma
        visão clara e abrangente do desempenho do seu sistema de energia
        elétrica. Permite a detecção precoce de falhas, bem como a tomada de
        decisões para maximizar a eficiência operacional e reduzir os custos de
        manutenção.&quot;
      </p>
    </main>
  );
}
