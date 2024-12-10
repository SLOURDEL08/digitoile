import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";
import Typography from "../ui/typography";

export default function Footer() {
  return (
    <footer className="bg-secondary h-full w-full">
      <div className="mx-14 max-md:p-10 max-xs:p-6 max-xs:py-8 max-xs:mx-6 max-md:mx-8 max-md:py-12 space-y-14 p-20 rounded-b-[150px] max-xs:pb-10 max-xs:space-y-6 max-sm:space-y-8 max-xs:rounded-b-[80px] max-md:rounded-b-[100px] bg-primary text-center">
        <Typography variant="title" className="">DISCUTONS<br/> ENSEMBLE DE<br/> VOS PROJETS</Typography>
        <div className="flex max-md:flex-wrap max-md:gap-4 justify-center gap-6">
          <Button
            onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/digitoile/30min'})}

          >Prendre rdv <IconArrow /></Button>
          <Link href='/contact'><Button className="group" variant={'outline'}>Contact <IconArrow className="brightness-0 group-hover:brightness-[1] transition-all"/></Button></Link>
        </div>
      </div>
      <div className="flex gap-24 max-md:gap-14 uppercase text-lg flex-col text-primary/60 py-20 justify-center items-center">
       <Link href='/contact'> <span className="text-6xl text-primary font-bold">DIGITOILE</span></Link>
        <div className="flex max-md:flex-wrap font-medium max-md:items-center max-md:justify-center max-md:text-center max-md:gap-6 justify-around w-full px-20">
                 <span className=" hover:text-primary">/confidentialité</span>
        <span className=" hover:text-primary">@2023 LADIGITOILE Tous droits réservés</span>
        <span className=" hover:text-primary">/LADIGITOILE</span>
        </div>
 
      </div>
    </footer>
  );
}