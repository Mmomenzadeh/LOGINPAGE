import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../Redux/slices/userSlice";
import UserCard from "../../Components/userCard";

export default function Users() {
  const userList = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersList());
  }, [dispatch]);

  console.log(userList.users.usersData);
  return (
    <>
      {userList.users.status === "pending" ? (
        "loading ...."
      ) : (
        <ul className="row d-felx justify-content-center w-100 p-0 m-0">
          {userList?.users?.usersData?.data?.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}
        </ul>
      )}
    </>
  );
}
