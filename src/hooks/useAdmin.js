import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://y-black-alpha.vercel.app/users/admin/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    // if (data.isAdmin) {
                    //     localStorage.setItem("isAdmin", data.isAdmin);

                    // }
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                });
        }
    }, [email]);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;
