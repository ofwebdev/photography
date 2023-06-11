import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecureInterceptor from "./useAxiosSecureInterceptor";

const useStudent = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecureInterceptor();
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`);
      return res.data.student;
    },
  });
  console.log(isStudent);
  return [isStudent, isStudentLoading];
};
export default useStudent;
