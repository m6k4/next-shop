import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchJson } from "../lib/api";
import { User } from "../types";

type LoginMutationParams = {
  email: string;
  password: string;
};

const USER_QUERY_KEY = "user";

export const useUser = () => {
  const query = useQuery('user', async (): Promise<User> => {
    try {
      return await fetchJson('/api/user');
    } catch (err) {
      return undefined;
    }
  }, {
    cacheTime: Infinity,
    staleTime: 30000, //ms
  }
  );

  return query.data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(({ email, password}: LoginMutationParams) =>
    fetchJson('/api/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      }),
    }));
  return {
    login: async ({email, password}: LoginMutationParams) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData(USER_QUERY_KEY, user);
        return true;
      } catch (err) {
        return false;
      }
    },
    loginLoading: mutation.isLoading,
    loginError: mutation.error,
  };
}

export const useLogout = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => fetchJson("/api/logout"));
  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueriesData(USER_QUERY_KEY, undefined);
  };
}
  
