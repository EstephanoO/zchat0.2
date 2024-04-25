import { Meet } from '@/modules/org/org.type';



interface DetailsProps {
  meet: Meet;
}

const MeetDetails: React.FC<DetailsProps> = ({ meet }) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md w-full mx-4">
    <h1 className="text-2xl font-bold mb-4">{meet.name}</h1>
    <p className="mb-2"><span className="font-semibold">Fecha:</span></p>
    <p className="mb-4"><span className="font-semibold">Hora:</span> {meet.time1} to {meet.time2}</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Unirse</button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Aceptar</button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Declinar</button>
    <p className="mt-4 mb-2"><span className="font-semibold">Descripción:</span> {meet.description}</p>
    <h2 className="text-xl font-bold mt-4 mb-2">Participantes:</h2>
    <ul className="list-disc pl-5">
    </ul>
  </div>
)
}

export default MeetDetails
    