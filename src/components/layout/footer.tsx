import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary h-full w-full">
      <div className="mx-14 space-y-14 p-20 rounded-b-[150px] bg-primary text-center">
        <span className="text-7xl  mx-auto font-bold">DISCUTONS<br/> ENSEMBLE DE<br/> VOS PROJETS</span>
        <div className="flex justify-center gap-6">
          <Button>Prendre rdv</Button>
          <Button>Contact</Button>
        </div>
      </div>
      <div className="flex gap-24 uppercase text-lg flex-col text-primary/60 py-20 justify-center items-center">
        <span className="text-6xl text-white font-bold">DIGITOILE</span>
        <div className="flex justify-around w-full px-20">
                 <span className=" hover:text-primary">/confidentialité</span>
        <span className=" hover:text-primary">@2023 LADIGITOILE Tous droits réservés</span>
        <span className=" hover:text-primary">/LADIGITOILE</span>
        </div>
 
      </div>
    </footer>
  );
}