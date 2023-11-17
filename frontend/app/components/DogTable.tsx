import { Dog } from "../types/dogs"
import { DogRow } from "./Dog"


type DogDataProps = {
  dogs: Dog[];
};

const DogTable: React.FC<DogDataProps> = ({ dogs }) => {
  return (
    <table className='table border-collapse mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center'>
      <thead className="font-semibold text-2xl text-current">
        <tr className='border-orange-300 border-b-4'>
          <th className="p-4">Id</th>
          <th>Name</th>
          <th>Breed</th>
          <th>Birth Year</th>
          <th>Gender</th>
          <th>Shelter</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map((dog) => (
          <DogRow key={dog.dogId} dog={dog} />
        ))}
      </tbody>
    </table>
  )
};

export default DogTable;
