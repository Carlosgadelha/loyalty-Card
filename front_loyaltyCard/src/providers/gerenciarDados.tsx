import * as react from 'react';
import axios from "axios";

interface IManageData {
    business: any[]
    setToken(token: string): void
    promotions: any[]
    updatePromotions(): void
    updateBusiness(): void
}

export const ManageDataContext = react.createContext<IManageData>({} as IManageData);

export const ManageDataProvider: react.FC<any> = (props) =>{

    const [business, setBusiness] = react.useState([]);
    const [promotions, setPromotions] = react.useState([]);
    const [token, setToken] = react.useState<string>("");

    react.useEffect(() => {
            updateBusiness();
            updatePromotions();
    } , [token]);

    console.log({token, business, promotions});

    const updateBusiness = async () => {
        const response = await axios.get('/business',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setBusiness(response.data);
    }

    const updatePromotions = async () => {
        const response = await axios.get('/promotions',{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setPromotions(response.data);

    }


    return(
        <ManageDataContext.Provider value={{
            business,
            setToken,
            updatePromotions,
            updateBusiness,
            promotions
        }}>
            {props.children}
        </ManageDataContext.Provider>
        
    )
}

export const useManageData = () => react.useContext(ManageDataContext)