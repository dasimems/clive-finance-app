import { create } from "zustand";

type TUser = {};

type TUserStoreState = {
  user: TUser | null;
};

type TUserStoreActions = {
  setUser: (user: TUser) => void;
};

const initialState: TUserStoreState = {
  user: {},
};

interface IUserStore extends TUserStoreState, TUserStoreActions {}

const useUserStore = create<IUserStore>((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
