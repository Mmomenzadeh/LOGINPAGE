import { Link } from "react-router-dom";

export default function UserCard({ avatar, last_name, first_name, email, id }) {
  return (
    <Link
      to={`/users/${id}`}
      className="p-0 m-0 col-12 p-0 m-0  d-flex flex-column  align-items-center "
    >
      <div className="py-3">
        <img
          src={avatar}
          alt={first_name + last_name}
          className="rounded-circle"
        />
      </div>
      <p
        className="py-2"
        style={{ fontWeight: "600" }}
      >{`${first_name}  ${last_name}`}</p>
      <p className="py-2" style={{ color: "#999", fontWeight: "300" }}>
        {email}
      </p>
    </Link>
  );
}
