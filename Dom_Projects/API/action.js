// END point: https://my-json-server.typicode.com/FreSauce/json-ipl/data

// Using fetch (In-built)

// 1.
// fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
//   .then((res) => res.json()) // Parsing the data
//   .then((res) => console.log(res)) // Accessing the actual parsed data
//   .catch((err) => console.log(err, "ERROR!"));

//2.
// async function getData() {
//   const response = await fetch(
//     "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
//   );
//   console.log(await response.json());
// }

// getData();

// Using Axios (External library)

// 1.
// axios
//   .get("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

//2.
// async function getData() {
//   const response = await axios.get(
//     "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
//   );
//   console.log(response.data);
// }

// getData();

// ======================= //
// Solution
const tbody = document.querySelector("tbody");

fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  .then((res) => res.json())
  .then((res) => {
    // Sorting based on NRR
    res.sort((a, b) => a.NRR - b.NRR);
    for (let data of res) {
      // tr's
      const tableRow = document.createElement("tr");
      for (let i of Object.values(data)) {
        // td's
        const tableData = document.createElement("td");
        tableData.append(i);
        tableRow.append(tableData);
        // console.log(tableData)
      }
      //   console.log(tableRow);
      tbody.append(tableRow);
    }
  })
  .catch((err) => console.log(err, "ERROR!"));
