import "./../../Assets/style/Pages/index.scss";
import UserCard from "../../Components/userCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetSingleUser } from "../../Redux/slices/SingleUserSlice";

export default function UserDetails() {
  const singleUserData = useSelector((data) => data?.singleUser?.userData?.data);
  const dispatch = useDispatch();
  const loctation = useLocation();

  const id = loctation.pathname.split("/")[2];

  useEffect(() => {
    dispatch(GetSingleUser(id));
  }, [dispatch]);


  return (
    <div className="row p-0 m-0 w-100 d-felx justify-content-center h-100 align-items-center">
      <UserCard {...singleUserData} />
    </div>
  );
}
