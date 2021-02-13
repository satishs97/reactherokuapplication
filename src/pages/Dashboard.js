import React, { useState, useEffect } from "react";
import NavBar from "../components/Nav/NavBar";
import UserCard from "../components/UserCard/UserCard";
import Modal from "../components/Modal/Modal";
import { usersJSON } from "../data/users";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userActiveTimes, setUserActiveTimes] = useState([]);

  useEffect(() => {
    setUsers([...usersJSON]);
  }, []);

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  const activeClicked = (activeTimeArray) => {
    setShowModal(true);
    setUserActiveTimes(activeTimeArray);
  };

  return (
    <div>
      <img src={require("./a.png")} />
      <div className="w-full absolute">
        <NavBar onFilter={handleFilter} />

        <div className="w-full grid sm:grid-cols-3 md:grid-cols-3 gap-7 px-3 sm:px-3 md:px-20 lg:px-48 -mt-10 lg:-mt-16">
          {users.map((mems) =>
            mems.members
              .filter((user) => {
                return user.real_name
                  .toLowerCase()
                  .includes(filterBy.toLowerCase());
              })
              .map((user) => (
                <UserCard
                  key={user.id}
                  name={user.real_name}
                  Id={user.id}
                  timeZone={user.tz}
                  activeClicked={() => {
                    activeClicked(user.activity_periods);
                  }}
                />
              ))
          )}
        </div>
      </div>
      {showModal ? (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
          userActiveTimes={userActiveTimes}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
