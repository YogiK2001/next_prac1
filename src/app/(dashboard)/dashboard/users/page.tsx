import Link from "next/link";

const Users = () => {
    return (
        <div>
            We are the users
            <h1>Users Dashboard</h1>

            <ul>

                <li> <Link href={"/src/app/(dashboard)/dashboard/users/1"}>User 1</Link> </li>
                <li> <Link href={"/src/app/(dashboard)/dashboard/users/2"}>User 2</Link> </li>
                <li> <Link href={"/src/app/(dashboard)/dashboard/users/3"}>User 3</Link> </li>
                <li> <Link href={"/src/app/(dashboard)/dashboard/users/4"}>User 4</Link> </li>
            </ul>
        </div>
    );
};

export default Users;