import User from "./User";

const Users = (props) => {
    console.log(props.user);
    return (
        <>
            {props.users.map((user) => (
                <User ime={user.ime} prezime={user.prezime} dob={user.dob} />
            ))}
        </>
    );
};
export default Users;
