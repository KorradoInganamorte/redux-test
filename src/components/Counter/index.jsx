import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementByAmount } from "../../store/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Увеличить значение"
          onClick={() => dispatch(incrementByAmount(Number(prompt())))}
          className="py-[10px] px-[15px] border border-black"
        >
          Увеличить
        </button>
        <span>{count}</span>
        <button
          aria-label="Уменьшить значение"
          onClick={() => dispatch(decrement())}
          className="py-[10px] px-[15px] border border-black"
        >
          Уменьшить
        </button>
      </div>
    </div>
  );
}

export default Counter;
