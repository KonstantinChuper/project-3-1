import { useEffect, useState } from "react";
import { $api } from "../api";

export default function TransactionHistory() {
  // установить состояние компонента useState
  const [transactions, setTransactions] = useState([]);
  // запрашивать данные из backend
  useEffect(() => {
    $api.get(`/all?idUser=${sessionStorage.getItem("user")}`).then((res) => {
      setTransactions(res.data);
    });
  }, []);
  // mapping массива транзакций
  return (
    <div>
      <p>TransactionHistory</p>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((tr: any) => (
            <>
              <li>
                <span>{tr.amount}$</span>
                <span>{tr.type}</span>
              </li>
            </>
          ))
        ) : (
          <li>No Transaction</li>
        )}
      </ul>
    </div>
  );
}
