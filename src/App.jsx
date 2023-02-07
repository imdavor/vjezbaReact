import ChildFun from "./ChildFun";
import Users from "./Users";

const App = () => {
    const users = [
        {
            ime: "Branko",
            prezime: "Branković",
            dob: 32,
        },
        {
            ime: "Janko",
            prezime: "Janković",
            dob: 42,
        },
        {
            ime: "Stanko",
            prezime: "Stanković",
            dob: 52,
        },
    ];
    return (
        <div>
            <Users users={users} />
            <ChildFun>{users}</ChildFun>
        </div>
    );
};

export default App;
