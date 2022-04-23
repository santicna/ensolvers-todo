export default function GetRequestHeaders() {
  const headers = {
    Accept: "*/*",
    Contentype: "application/json",
  };
  return {
    headers: headers,
    timeout: 10000 * 15,
  };
}
