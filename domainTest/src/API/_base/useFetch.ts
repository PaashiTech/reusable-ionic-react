import { useState } from "react";
import axios from "axios";

type UseFetchProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE"
};

type CommonFetch = {
  /** the variables that the endpoint expects to receive */
  input?: { [index: string]: any };
  /** this allows you to override any default fetch options on a 
  case by case basis. think of it like an escape hatch. */
  fetchOptions?: RequestInit;
}

// <T> turns this into a generic component. We will take advantage of this 
// by assigning the `data` variable the type T. 
export function useFetch<T> ({ url, method }: UseFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  // we are assigning the generic type T to our data value here
  // This is the type of the payload that is going to be returned by this API.
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | null>(null);

  const commonFetch = async ({
    input,
    fetchOptions = {},
  }: CommonFetch) => {
    setIsLoading(true);

    // await fetch(url, {
    //   method,
    //   ...DEFAULT_FETCH_OPTIONS, // this should be defined as a const in a separate file 
    //   ...fetchOptions, // this allows you to override any default fetch options on a case by case basis
    //   body: JSON.stringify(input),
    // });
    const { data, status } = await axios.request({
      url: url,
      method: method,
      params: input
    });
    
    setIsLoading(false);
    setStatus(status);
    setData(data);
  };

  return { commonFetch, isLoading, data, status };
}
