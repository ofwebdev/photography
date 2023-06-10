import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecureInterceptor from "./useAxiosSecureInterceptor";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecureInterceptor();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res.data.instructor;
    },
  });
  console.log(isInstructor);
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
