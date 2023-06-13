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
  const data = await getDatasheetOptions();
  let allOptions: any[] = [];
  data.map((item, index) => {

    if (item.datasheet_id === modelId) {
      return allOptions.push(item);
    }
  });
  return allOptions;
}
