import ContentTitle from "@/components/layout/ContentTitle";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { APIData, Order } from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "store";
import { selectSearch } from "../../store/search_slice";

export default function Analytics() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filtered_orders, setFilteredOrders] = useState<Order[]>([]);
  useEffect(() => {
    fetch("/api/orders")
      .then((response) => response.json())
      .then((orders: APIData) => {
        setOrders(orders.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  store.subscribe(() => {
    setFilteredOrders(
      orders.filter((order) => {
        return store.getState().search.searchItems.indexOf(order.id) >= 0;
      })
    );
  });
  return (
    <DashboardLayout>
      <ContentTitle
        title="Item Search"
        crumbs={["Home", "OC", "Item Search"]}
      />
      <div className="mt-4">
        <div className="w-full">
          <div className="w-full">
            {/* {filtered_orders.map((order) => {
              console.log(order);
              return <div key={order.id}>{order.pick_date.toString()}</div>;
            })} */}
          </div>
          <div>{`${filtered_orders.length} record(s) found`}</div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th>ID</th>
                <th>Order Number</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created On</th>
                <th>Pick Date</th>
                <th>Price</th>
                <th>From Node</th>
                <th>Receiving Node</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {filtered_orders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white border-b dark:bg-gray-800"
                >
                  <td>{order.id}</td>
                  <td>{order.order_num}</td>
                  <td>{order.type}</td>
                  <td>{order.status}</td>
                  <td>{order.created_on.toString()}</td>
                  <td>{order.pick_date.toString()}</td>
                  <td>{order.price}</td>
                  <td>{order.from_node}</td>
                  <td>{order.receiving_node}</td>
                  <td>{order.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
