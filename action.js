let respondApi;
getApi();
async function getApi() {
  const callApi = await fetch("https://jsonplaceholder.typicode.com/posts");
  respondApi = await callApi.json();
  console.log(respondApi);
  tableData(respondApi);
}
const getTable = document.querySelector("#tbody");
function tableData(data) {
  data.forEach((element) => {
    const row = document.createElement("tr");
    const userId = document.createElement("td");
  });
}
