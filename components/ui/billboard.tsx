
import { Billboard as BillboardType } from "@/types";

import bg from '@/assets/images/bookDemo.jpg'
import prismadb from "@/lib/prismadb";


//image credits 

interface BillboardProps {
  data: BillboardType | null;
}

const Billboard:React.FC<BillboardProps> = async (
  data
) => {
  const libri = await prismadb.libri.findMany();
  var renderedOutput = libri.map(item => <div key={item.autore}> {item.autore} </div>);

  return (

    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${bg.src})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            Libreriamo i Garages
          </div>
          
        </div>
        <div>
          {renderedOutput}
          </div>
      </div>
    </div>
  );
};

export default Billboard;