import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecureInterceptor from "./useAxiosSecureInterceptor";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecureInterceptor();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(res.data.admin);
      return res.data.admin;
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
