import React from "react";
import { Link } from "react-router-dom";
function Error(){

    return (
        <>
            <h1>Sao bạn lại đến đây? <Link to="/" style={{ color: '#007bff', fontWeight: 'bold' }}>Về trang chủ</Link></h1>
        </>
    )
}

export default Error