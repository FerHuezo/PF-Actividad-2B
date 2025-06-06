import UserRow from "./UserRow";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200 text-gray-700 text-left text-sm">
          <tr>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Temática</th>
            <th className="px-4 py-2 border-b">Instructor</th>
            <th className="px-4 py-2 border-b max-w-xs">Descripción</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
