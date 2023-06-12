import { useQuery } from "@tanstack/react-query";
import useAxiosSecureInterceptor from "./useAxiosSecureInterceptor";
import useAuth from "./useAuth";
const useSelect = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecureInterceptor();
  const { refetch, data: select = [] } = useQuery({
    queryKey: ["select", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/select?email=${user?.email}`);
      return res.data;
    },
  });

  return [select, refetch];
};
export default useSelect;
