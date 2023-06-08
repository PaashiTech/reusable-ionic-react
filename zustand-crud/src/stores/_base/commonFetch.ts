import axios, { AxiosResponse } from "axios";

type CommonFetch = {
  /** URL to send the REST API request to */
  url: string;
  /** REST API type */
  method: "GET" | "POST" | "PUT" | "DELETE"
  /** Parameters for the request */
  params?: { [index: string]: string } | null;
  /** the variables that the endpoint expects to receive */
  input?: { [index: string]: any } | null;
}

/**
 * Common fetch interface to send REST API request
 * @param {string} url - URL to send the REST API request to
 * @param {string} method - REST API type (should be either "GET", "POST", "PUT" or "DELETE")
 * @param {Object} [params] - Parameters for the REST API request
 * @param {Object} [input] - Inputs for the endpoint
 * @returns {Promise<AxiosResponse<any, any>>} - Promise that will evaluate to status and the data of the request
 */
export const commonFetch = ({ 
  url,
  method,
  params, 
  input
}: CommonFetch): Promise<AxiosResponse<any, any>> => {
  return axios.request({
    url: url,
    method: method,
    params: params? params : null,
    data: input ? input : {}
  });
} 
