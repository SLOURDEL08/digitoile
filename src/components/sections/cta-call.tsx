'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";
import Typography from "../ui/typography";

export default function CTACall() {
  return (
    <div className="bg-gray/20 max-xs:p-6 max-lg:p-14 max-md:p-8 anim-gray-bg transition-all max-md:text-left duration-500 group/container text-center p-20 flex flex-col max-md:gap-4 gap-6">
      <Typography 
        variant="subtitle" 
        className=" font-[800] max-md:mx-0 max-md:w-full !leading-[1.15] mx-auto text-gray max-lg:!text-5xl max-md:!text-4xl max-xs:!text-3xl"
      >
        Besoin de conseils pour booster votre business ?
      </Typography>
      
     
      
      <Link
      href='/contact'
      >
      <Button 
  
        variant="outline" 
        className="max-md:group-hover/container:scale-100  max-md:group-hover/container:translate-x-1 w-max max-md:mx-0 max-md:mt-1 max-md:text-base max-md:py-2.5 max-md:px-4 max-md:border mx-auto mt-4  text-gray group-hover/container:scale-110 group-hover/container:bg-gray group-hover/container:text-secondary transition-all duration-300 border-gray"
      >
        Cliquez ici
        <IconArrow className="text-gray  transiton-all duration-300 group-hover/container:!text-secondary max-md:w-3 max-md:h-3"/>
        </Button>
        </Link>
    </div>
  );
}