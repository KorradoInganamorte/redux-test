import { useDispatch, useSelector } from "react-redux";
import { ADD_CUSTOMER, GET_COSTOMER } from "../../store/CustomerSlice";

function Customer() {
  const customer = useSelector((state) => state.customer.value);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(ADD_CUSTOMER(prompt()))} className="py-[10px] px-[15px] border border-black">
        Click here to add customer
      </button>
      <button onClick={() => dispatch(GET_COSTOMER())} className="py-[10px] px-[15px] border border-black">
        Click here to see all customer
      </button>
      <div className="flex flex-col">{customer}</div>
    </>
  );
}

export default Customer;
