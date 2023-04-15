export function filterData(searchText, list) {
    if (searchText.length > 0) {
      return list.filter((res) => {
        console.log(res.data.name, searchText);
        return res.data.name.toLowerCase().includes(searchText.toLowerCase()) ?? "No result found"
      });
    } else{
      return list;
    }
  }
  