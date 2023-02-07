const User = (props) => {
    return (
        <>
            <h1>Ime: {props.ime}</h1>
            <p>Dob: {props.prezime}</p>
            <p>Prezime: {props.dob}</p>
        </>
    );
};
export default User;
