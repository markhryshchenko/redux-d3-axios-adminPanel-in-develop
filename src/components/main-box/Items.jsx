import User from "./User";

export default function Items({items}) {
  return (
   <div> {
    items
    .map(user => {
      return <User userData={user} key={user.id}/>
    })}
   </div>
  );
}



