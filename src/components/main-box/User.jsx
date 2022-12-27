export default function Items({ userData }) {
  return (
    <tr>
      <th>{userData.id}</th>
      <td>{userData.name}</td>
      <td>{userData.username}</td>
      <td>{userData.email}</td>
      <td>{userData.address.geo.lat}</td>
      <td>{userData.address.geo.lng}</td>
    </tr>
  );
}
