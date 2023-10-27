
import Image from "next/image";
import bg from '@/assets/images/bookDemo.jpg'
import prismadb from "@/lib/prismadb";

import { promises as fs, read } from 'fs';

//image credits 

interface BillboardProps {
  data: null;
}

const Billboard: React.FC<BillboardProps> = async (
  data
) => {

  var file = "D:/Documents/LiG/libri/io_robot.jpg";
  const reader = await fs.readFile(file, 'base64');

  //console.log('Encoded Base 64 File String:', reader);
  /******************* for Binary ***********************/
  //var dataq = reader.split(',')[1];
  //var binaryBlob = atob(dataq);
  var binaryBlob = atob(reader);
  //console.log('Encoded Binary File String:', binaryBlob);

  const libri = await prismadb.libri.findMany();

  var renderedOutput = libri.map(item =>
    <div key={item.autore}>
      <div key={item.autore}>
        <Image src={`data:image/jpeg;base64,${btoa(binaryBlob)}`} alt="aaa" width="200" height="200" />
      </div>
      <div key={item.autore}>
        {item.autore}
      </div>
    </div>
  );

  return (

    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${bg.src})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            Libreriamo i Garages
          </div>

        </div>

      </div>
      <div>
        {renderedOutput}
      </div>
    </div>
  );
};

export default Billboard;