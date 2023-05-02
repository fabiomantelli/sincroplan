function Footer() {
  return (
    <footer className="bg-[#43586A] mt-4">
      <div className="p-6  max-w-7xl m-auto">
        <hr className="border-white border-1 mb-4" />
        <ul className="flex flex-col gap-4 text-white text-2xl">
          <li>QUEM SOMOS</li>
          <li>PROJETOS DESENVOLVIDOS</li>
          <li>SOFTWARES</li>
          <li>EXPLORAR</li>
        </ul>
        <hr className="border-white border-1 mt-4" />
        <small className="text-white">
          &copy; 2023 Sincroplan Engenharia S. S. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
