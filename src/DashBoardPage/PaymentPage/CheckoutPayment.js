import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutPayment = ({takaes}) => {


    const {products_price, email, user_name, _id}=takaes;
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [countError, setCountError] = useState('');
    const [confirmPayment, setConfirmPayment] = useState('');
    const [trangectionID, setTrangectionID]=useState('')
    const stripe = useStripe();
    const elements = useElements();



    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://used-products-server-gold.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" 
        },
          body: JSON.stringify({ products_price }),
        })
          .then((res) => res.json())
          .then((data) =>{
            setClientSecret(data.clientSecret)
          });
      }, [products_price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(event)
        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        console.log(card)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }


        const {paymentIntent, error: errorCount} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user_name,
                  email: email,
                },
              },
            },
          );
          if(errorCount){
            setCountError(errorCount);
            return;
          }

          if(paymentIntent.status === 'succeeded'){
          
            const payout ={
                email,
                bookingID: _id,
                trangectioneID: paymentIntent.id,
                price: products_price
            }
            fetch('https://used-products-server-gold.vercel.app/payments',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(payout)
            })
            .then(res => res.json())
            .then(data => {
                    if(data.insertedId){
                        setConfirmPayment('Congrats! Payment confirmed');
                        setTrangectionID(paymentIntent.id)
                    }
            })

          }
          
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-secondary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

                <p className='text-red-500'>{cardError}</p>
            
            { confirmPayment &&
                <div>
                    <p className='text-green-300'>{confirmPayment}</p>
                <p className='text-green-600'> TrangectionID: {trangectionID}</p>
                </div>
            }
        </>
    );
};

export default CheckoutPayment;