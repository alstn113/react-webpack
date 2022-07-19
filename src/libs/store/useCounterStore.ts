import create from "zustand";

interface States {
  count: number;
}

interface Actions {
  increaseByNumber: (number: number) => void;
}

const useCounterStore = create<States & Actions>((set) => ({
  // States
  count: 0,

  // Actions
  increaseByNumber: (number) =>
    set((state) => ({ count: state.count + number })),
}));

export default useCounterStore;
