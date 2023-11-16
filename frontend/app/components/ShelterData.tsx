type Shelter = {
  shelterId: number;
  shelterName: string;
  location: string;
  email: string;
};

type ShelterDataProps = {
  shelters: Shelter[];
};

const ShelterData: React.FC<ShelterDataProps> = ({ shelters }) => {

  return (
    <>
      {
        shelters.map((shelter) => {
          const { shelterId, shelterName, location, email } = shelter;

          return (
            <tr key={shelterId}  className=" hover:dark:bg-yellow-700">
              <td className="py-2">{shelterId}</td>
              <td>{shelterName}</td>
              <td>{location}</td>
              <td>{email}</td>
            </tr>
          )
        })
      }
    </>
  )
};

export default ShelterData;
