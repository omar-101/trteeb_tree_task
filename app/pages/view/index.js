import { useState, useEffect } from 'react';
import api from '../../api';
import ListItems from '../../components/ListItems';

const Views = () => {
    const [items, setItems] = useState([]);
    useEffect(()=> {
        (async () => {
            try{
                const result = await api.getManyFood({});
                setItems(result.rows);
            }catch(error){
                console.log(error);
                alert('server error');
            }
        })();
    }, []);
    return <ListItems items={items} />;
}   

export default Views;