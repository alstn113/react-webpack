import useCounterStore from "@/libs/store/useCounterStore";

const Counter = () => {
  const { count, increaseByNumber } = useCounterStore();
  return (
    <div>
      <div>Counter</div>
      <div>THIS IS COUNTER PAGE.</div>
      <div>{count}</div>
      <div>
        <button onClick={() => increaseByNumber(5)}>5증가</button>
      </div>
    </div>
  );
};

export default Counter;
