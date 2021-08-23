import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function ProductDetail() {

    const { query } = useRouter();

    console.log(useRouter());   

    return <div>REVIEW for {query.productId} and REVIEW NUMBER {query.review}</div>;
}