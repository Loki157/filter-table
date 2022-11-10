var keyWords;
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
    const it = document.createElement("td");
    const title = document.createElement("td");
    const body = document.createElement("td");

    userId.textContent = element.userId;
    it.textContent = element.id;
    title.textContent = element.title;
    body.textContent = element.body;

    row.appendChild(userId);
    row.appendChild(it);
    row.appendChild(title);
    row.appendChild(body);
    getTable.append(row);
  });
}
//searchFilter(respondApi);
function filterData(data, keyWords) {
  keyWords = document.querySelector(".inp");
  return data.filter((dataStat) => dataStat.includes(keyWords));
  //return keywordFil;
}

function searchFilter() {
  console.log(filterData(respondApi, keyWords));
}
