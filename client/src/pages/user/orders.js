import React,{useState, useEffect} from 'react'
import UserMenu from '../../components/layout/userMenu';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders= async () =>{
    try{
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/orders`);
      setOrders(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() =>{
    if(auth?.token){
      getOrders();
    }
  },[auth?.token]);

  return (
    <Layout title={"Your Orders"}>
       <div className='container-fluid p-3'>
         <div className='row'>
            <div className='col-md-3'>
              <UserMenu/>
            </div>
            <div className='col-md-9 mt-5'>
               <h2 className='text-center'>Orders</h2>
              <p> {JSON.stringify(orders, null, 4)}</p>
              

            </div>
         </div>
       </div>
    </Layout>
  )
}

export default Orders;