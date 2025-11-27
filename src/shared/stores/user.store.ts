import { create } from "zustand";

type TUser = {
  name: string;
  firstName: string;
  lastName: string;
  accountNumber: string;
  balance: number;
};

type TUserStoreState = {
  user: TUser | null;
};

type TUserStoreActions = {
  setUser: (user: TUser) => void;
};

const initialState: TUserStoreState = {
  user: null,
};

interface IUserStore extends TUserStoreState, TUserStoreActions {}

const useUserStore = create<IUserStore>((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
