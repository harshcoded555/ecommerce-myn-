import HomeItems from "../components/HomeIItems";
import { useSelector } from "react-redux";

const Home = () => {
    const backendItems = useSelector(store => store.items);
    return (<>
    <div className="bagitems_main">
        {backendItems && backendItems.map(perItem => <HomeItems key={perItem.id} perItem = {perItem}/>)}
    </div>
    </>)
}
export default Home;