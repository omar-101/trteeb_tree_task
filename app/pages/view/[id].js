
import { useState, useEffect } from 'react';
import TreeViewer from '../../components/TreeViewer';
import { useRouter } from 'next/router';
import api from '../../api';

const ViewByID = () => {
    const router = useRouter();
    const [item, setItem] = useState([]);

    useEffect(() => {
        if(!router.query.id){
            return;
        }
        (async () => {
            {
                try{
                    const result = await api.getOneFood(router.query.id);
                    setItem(result.row);
                }catch(error){
                    console.log(error);
                    alert('server error');
                }
            }
        })();
    }, [router.query])

    return item.length ? <TreeViewer item={item} /> : 'loading...'
}

export default ViewByID;