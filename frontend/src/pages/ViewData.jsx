import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/NavBar";

const ViewData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:9000/reads");
      console.log(response.data.data);
      const res = await response.data.data;
      setUser(res);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/delete/${id}`);
      getUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="w-[90vw] max-h-[85vh] rounded-lg overflow-auto shadow-lg">
          <div className="overflow-x-auto w-full">
            <table className="text md font-semibold w-full text-center">
              <thead className="bg-blue-500">
                <tr className="tracking-wide">
                  <th className="p-4">Nama</th>
                  <th className="p-4">Kelas</th>
                  <th className="p-4">Prodi</th>
                  <th className="p-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="bg-blue-200">
                {user.map((user) => (
                  <tr key={user.id}>
                    <td className="border-r p-5 border-white">{user.nama}</td>
                    <td className="border-r p-5 border-white">{user.kelas}</td>
                    <td className="border-r p-5 border-white">{user.prodi}</td>
                    <td className="flex p-5 justify-center items-center">
                      <div className="flex justify-between w-52 p-2">
                        <Link
                          to={`/edit/${user.id}`}
                          className="bg-green-500 rounded-md py-2 px-6 hover:bg-red-400"
                        >
                          edit
                        </Link>
                        <button
                          className="bg-red-500 rounded-md py-2 px-6 hover:bg-red-400"
                          onClick={() => deleteUser(user.id)}
                        >
                          Del
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewData;
