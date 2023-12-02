import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

const HomePage = async () => {
    const libri = await prismadb.libriSimple.findMany();
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
    return (
        <Container>
            <div className="space-y-10 pb-1\0">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Titolo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Autore
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Prezzo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Genere
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {libri.map(item =>
                                <tr key={item.titolo} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Image src={`data:image/jpeg;base64,${item.urlImage}`} alt="aaa" width="100" height="100" />
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.titolo}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.autore}
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        Giallo
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                             )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;