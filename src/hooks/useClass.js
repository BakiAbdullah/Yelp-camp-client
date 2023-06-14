import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export const useClass = () => {
  const { user, loading } = useAuth(); 
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      // console.log("res from Axios", res);
      return res.data;
    },
  });

  // const { refetch, data: classes = [] } = useQuery({
  //   queryKey: ["classes", user?.email],
  //   enabled: !loading && !!user?.email,
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_API_URL}/classes?email=${user?.email}`, {
  //         headers: {
  //           authorization: `Bearer ${token}`
  //         }
  //       }
  //     );
  //     return res.json();
  //   },
  // });

  return [classes, refetch];
};
