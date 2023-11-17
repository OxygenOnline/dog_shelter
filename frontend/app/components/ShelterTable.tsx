import { Shelter } from "../types/shelters"
import { ShelterRow } from "./Shelter";


interface ShelterProps {
  shelters: Shelter[];
}

const ShelterTable: React.FC<ShelterProps> = ({ shelters }) => {
  return (
    <table className="table border-collapse mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center">
      <thead className="font-semibold text-2xl text-current">
        <tr className='border-orange-300 border-b-4'>
          <th className="p-4">Id</th>
          <th>Name</th>
          <th>Location</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {shelters.map((shelter) => (
          <ShelterRow key={shelter.shelterId} shelter={shelter} />
        ))}
      </tbody>
    </table>
  )
};

export default ShelterTable;
