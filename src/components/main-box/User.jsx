export default function User({ usersData }) {
  /* console.log(usersData.address.geo.lat) */
  return (
    <tr>
      <th>{usersData.id}</th>
      <td>{usersData.name}</td>
      <td>{usersData.username}</td>
      <td>{usersData.email}</td>
      <td>{Math.abs(parseInt(usersData.address.geo.lat) )}</td>
      {/* <td>{usersData.address.geo.lng}</td> */}
    </tr>
  );
}
