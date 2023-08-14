import useGroceryStore from "./store/useGroceryStore";

import AddCustomer from "./components/AddCustomer";
import CheckoutLine from "./components/CheckoutLine";
import Customer from "./components/Customer";

const App = () => {
  const lines = useGroceryStore((state) => state.lines);
  const addCustomer = useGroceryStore((state) => state.addCustomer);

  return (
    <>
      <AddCustomer addCustomer={addCustomer} />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
          gap: "20px",
        }}
      >
        {lines.length >= 0 &&
          lines.map((line) => {
            return (
              <CheckoutLine line={line}>
                {line.customers.map((customer) => {
                  return (
                    <Customer
                      {...{
                        lineId: line.id,
                        items: customer.items,
                      }}
                    />
                  );
                })}
              </CheckoutLine>
            );
          })}
      </div>
    </>
  );
};

export default App;
