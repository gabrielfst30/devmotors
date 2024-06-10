import Submenu from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";

export default async function Home() {
  const data: HomeProps = await getDataHome();
  //hack para ver objeto de dois níveis
  return (
    <main>
      <Submenu />
    </main>
  );
}
