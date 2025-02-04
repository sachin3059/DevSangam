import axios from "axios";
import { useEffect, useState } from "react";

const Premium = () => {

    const [isUserPremium, setIsUserPremium] = useState(false);

    const verifyPremiumUser = async (req, res) => {
        try {
            const res = await axios.get("http://localhost/premium/verify", {withCredentials: true});
            if(res.data.isPremium){
                setIsUserPremium(true);
            }
            
        } catch (error) {
            
        }
    }

    const handleBuyClick = async (type) => {
        try {
            const order = await axios.post(
                "http://localhost:3000/payment/create", 
                {
                    membershipType: type,
                },
                {withCredentials: true}
            );
            
            const { amount, keyId, currency, notes, orderId } = order.data;

            const options = {
                key: keyId,
                amount,
                currency,
                name: "Dev Sangam",
                description: "Connect to other developers",
                order_id: orderId,
                prefill: {
                    name: notes.firstName + " " << notes.lastName,
                    email: notes.email,
                    contact: "999999999",
                },
                theme: {
                    color: "#F37254",
                },
                handler: verifyPremiumUser,
            };

            // it should open the razorpay dialog box
            const rzp = new window.Razorpay(options);
            rzp.open();

        } catch (error) {
            console.error(error);
        }
    } 

    useEffect(() => {
        verifyPremiumUser();
    }, []);


    return !isUserPremium ? (
        <div className="flex">
            <div className="border h-50 px-4 mx-5 my-5">
                <h2 className="font-semibold py-1">Gold premium member ship</h2>
                <p>to chat with other users</p>
                <button className="border px-4 mt-20 cursor-pointer "
                onClick={() => handleBuyClick("silver")}
                >Buy Silver</button>
            </div>
            <div className="border h-50 px-4 mx-5 my-5">
                <h2 className="font-semibold py-1">Gold premium member ship</h2>
                <p>to get blue tick 🔵 </p>
                <button className="border px-4 mt-20 cursor-pointer "
                onClick={() => handleBuyClick("gold")}
                >Buy Gold</button>
            </div>
            
        </div>
    ):
    (
        <div><p>You are already premium user</p></div>
    )
}


export default Premium;