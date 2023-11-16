type Dog = {
  dogId: number;
  dogName: string;
  breed: string;
  birthYear: number;
  gender: string;
  shelterId: number;
  shelterName: string;
};

type DogDataProps = {
  dogs: Dog[];
};

const DogData: React.FC<DogDataProps> = ({ dogs }) => {

  return (
    <>
      {
        dogs.map((dog) => {
          const { dogId, dogName, breed, birthYear, gender, shelterId, shelterName } = dog;

          return (
            <tr key={dogId}  className=" hover:dark:bg-yellow-700">
              <td className="py-2">{dogId}</td>
              <td>{dogName}</td>
              <td>{breed}</td>
              <td>{birthYear}</td>
              <td>{gender}</td>
              <td>{shelterId}</td>
              <td>{shelterName}</td>
            </tr>
          )
        })
      }
    </>
  )
};

export default DogData;
