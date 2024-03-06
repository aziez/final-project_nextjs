import create from 'zustand'

interface UserState {
  userData: Record<string, any>
}

interface UserActions {
  setUserData: (data: Record<string, any>) => void
}

type UserStore = UserState & UserActions

const useStore = create<UserStore>((set) => ({
  userData: {},

  setUserData: (data) => set({ userData: data }),
  removeUserData: () => set({ userData: {} }),
}))

export default useStore
