import { APILISTS } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { IListItem } from "@/interfaces";

export default function SampleReactQuery() {
  const { data, isFetching } = useQuery({ queryKey: ["fetchList"], queryFn: APILISTS.fetchItemList });
  const isListData = data?.data.result.items;
  return (
    <div>
      <h1>React-query 사용 페이지입니다</h1>
      {isFetching ? (
        <p>로딩중...</p>
      ) : (
        <ul>
          {isListData?.map((item: IListItem) => (
            <li key={item.item_Id}>
              <p>{item.full_item_name}</p>
              <p>{item.price}원</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
