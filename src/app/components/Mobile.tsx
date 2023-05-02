import Image from "next/image";

function Mobile() {
  return (
    <section>
      <div className="relative flex justify-center">
        <figure>
          <Image
            src={`/images/mobile-contact.png`}
            alt="Contato Mobile"
            width={1280}
            height={1538}
            className="top-0 object-cover h-mobile"
            priority
          />
        </figure>
        <p className="absolute pl-6 pr-6 top-6 text-white md:text-xl max-w-7xl">
          Se você precisa de suporte em medição sincronizada de fasores, entre
          em contato conosco hoje mesmo. Estamos prontos para ajudá-lo a manter
          seus sistema operando com segurança e eficiência.
        </p>
      </div>
    </section>
  );
}

export default Mobile;
