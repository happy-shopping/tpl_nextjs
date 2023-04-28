import { useEffect, useState } from "react";
import { APILISTS } from "@/api";
import { IListItem } from "@/interfaces";

export default function SampleAxios() {
  const [isListData, setIsListData] = useState([]);
  useEffect(() => {
    APILISTS.fetchItemList().then((res) => {
      setIsListData(res.data.result.items);
    });
  }, []);

  return (
    <div>
      <h1>Axios 사용 페이지입니다</h1>
      <ul>
        {isListData.map((item: IListItem) => (
          <li key={item.item_Id}>
            <p>{item.full_item_name}</p>
            <p>{item.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
