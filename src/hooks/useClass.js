import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useClass = () => {
  const { user, loading } = useAuth(); 
  // const token = localStorage.getItem('access-token');
  // const axiosSecure = useAxiosSecure();

  // const { refetch, data: cart = [] } = useQuery({
  //   queryKey: ["carts", user?.email],
  //   enabled: !loading && !!user?.email,
  //   queryFn: async () => {
  //     const res = await axiosSecure(`/carts?email=${user?.email}`);
  //     console.log("res from Axios", res);
  //     return res.data;
  //   },
  // });

  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/classes?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [classes, refetch];
};
