//read file

var file = "D:/Documents/LiG/libri/io_robot.jpg";
const reader = await fs.readFile(file, 'base64');

console.log('Encoded Base 64 File String:', reader);
/******************* for Binary ***********************/
var dataq = reader.split(',')[1];
//var binaryBlob = atob(dataq);
var binaryBlob = atob(reader);
console.log('Encoded Binary File String:', binaryBlob.length);
<Image src={`data:image/jpeg;base64,${btoa(binaryBlob)}`} alt="aaa" width="200" height="200" />


//from db => urlImage è una stringa
  const libri = await prismadb.libriSimple.findMany();
  // const libri = await prismadb.libri.findMany();
  var renderedOutput = libri.map(item =>
    <div key={item.autore}>
      <div key={item.autore}>
        <Image src={`data:image/jpeg;base64,${item.urlImage}`} alt="aaa" width="200" height="200" />
        {/* <Image src={`data:image/jpeg;base64,${btoa(binaryBlob)}`} alt="aaa" width="200" height="200" /> */}
      </div>
      <div key={item.autore}>
        {item.autore}
      </div>
    </div>
      );