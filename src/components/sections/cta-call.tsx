'use client'

import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";


export default function CTACall() {
  return (
    <div className="bg-gray/20 hover:bg-gray/40 transition-all duration-500 text-center p-20 flex flex-col gap-10">
          <span className="text-7xl px-20 font-semibold mx-auto text-gray">Besoin de conseils pour booster votre business ?</span>
          <p className="text-3xl text-gray">Réservez un créneau pour vous faire rappeler
          </p>
          <Button className="w-max mx-auto">Cliquez ici<IconArrow/></Button>
    </div>
  );
}