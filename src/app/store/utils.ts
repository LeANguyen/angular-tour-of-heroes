export interface ObjectState<T> {
  // items that have been loaded so far to support selecting an item from cache
  // this require intensive checking of item id, and thus could be omitted for now
  items: T[];
  // selected item when viewing detail pages
  selected?: T;
  // filtered items reflected by filters in the query param, used on listing views
  filteredItems: T[];
  // for pagination in listing views
  filteredItemsCount: number;
  // if any of these is loading
  loading: boolean;
  // if any of these has errors
  errors: string[];
  // a number indicates the progress of API calls
  progress?: number;
}

export const getInitialState: <T>() => ObjectState<T> = () => ({
  items: [],
  filteredItems: [],
  filteredItemsCount: 0,
  loading: false,
  errors: [],
});
