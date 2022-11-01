import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from '../../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, 'products', idProduct);
        getDoc(queryDoc)
            .then((resp) => {
                if (resp._document) {
                    setProduct({ id: resp.id, ...resp.data() });
                } else {
                    navigate('/NotFound404');
                }
            })
            .catch((err) => console.log(err));
    }, [idProduct, navigate]);

    return (
        <section className="container">
            <ItemDetail product={product} />
        </section>
    );
};
