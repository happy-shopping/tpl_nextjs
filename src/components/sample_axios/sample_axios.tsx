import { useEffect, useState } from "react"
import { APILISTS } from "@/api"
import { IListItem } from "@/interfaces"
import { AxiosResponse } from "axios"

export default function SampleAxios() {
  const [isListData, setIsListData] = useState<any[]>([])
  useEffect(() => {
    APILISTS.fetchItemList()
      .then((res: AxiosResponse<any>): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const items = res.data?.result?.items as any[]
        setIsListData(items)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
  )
}
