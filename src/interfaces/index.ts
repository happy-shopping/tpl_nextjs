export interface IApi {
  baseUrl: string | undefined;
  fetchItemList: () => Promise<any>;
}

export interface IListItem {
  item_Id: number;
  full_item_name: string;
  price: number;
}
