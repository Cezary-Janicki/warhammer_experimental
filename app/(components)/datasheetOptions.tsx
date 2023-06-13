import Datasheets_options from "@/app/(components)/dataFetching/Datasheets_options";

async function getDatasheetOptions() {
  const data = await Datasheets_options();
  return data;
}

export async function datasheetOptions(props: string) {
  const getModelId = (id: number) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };
  const modelId = getModelId(props);
  //   console.log("props", modelId);
  const data = await getDatasheetOptions();
  //   console.log("datasheet options id", data[5].datasheet_id);
  let allOptions: any[] = [];
  data.map((item, index) => {
    // console.log("map datasheet id", item.datasheet_id);

    if (item.datasheet_id === modelId) {
      // console.log("map datasheet id", item.datasheet_id);
      return allOptions.push(item);
    }
  });
  return allOptions;
}
