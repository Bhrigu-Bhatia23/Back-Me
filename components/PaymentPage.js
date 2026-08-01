"use client"
import { React, useEffect, useState } from 'react'
import Script from 'next/script'
import Image from "next/image";
import Link from "next/link";
import UserIcon from "@/components/UserIcon";
import ArrowRightIcon from './ArrowRightIcon';
import SquarePenIcon from "@/components/SquarePenIcon";
import { useSession } from 'next-auth/react';
import { fetchUserByUsername, fetchPayment, initiate, } from "@/actions/useractions";
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';


const PaymentPage = (props) => {
    const { data: session } = useSession();
    const { username } = props;
    const [currentUser, setcurrentUser] = useState({})
    const [Payments, setPayments] = useState([])
    const searchParams = useSearchParams();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (username) {
            document.title = `${username} | BackMe`;
        }
    }, [username]);

    useEffect(() => {
        if (searchParams.get("payment") === "true") {
            toast.success(`Thanks for supporting ${username}!`, {
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
                icon: "🚀",
            });

            // Remove the query parameter so the toast only appears once
            window.history.replaceState({}, "", window.location.pathname);
        }
    }, [searchParams]);

    const [paymentform, setpaymentform] = useState({
        name: "",
        amount: "",
        message: ""
    })

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    // const getData = async () => {
    //     //let user = await fetchUser(username)
    //     const user = await fetchUserByUsername(username);
    //     setcurrentUser(user)
    //     let dbPayments = await fetchPayment(username)
    //     setPayments(dbPayments)
    //     console.log(user);
    //     console.log(user.profilepic);
    // }

    const getData = async () => {
        const user = await fetchUserByUsername(username);

        if (!user) {
            console.error("User not found:", username);
            return;
        }

        setcurrentUser(user);

        const dbPayments = await fetchPayment(username);
        setPayments(dbPayments);

        console.log(user);
        console.log(user.profilepic);
    };

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
            key: currentUser.razorID, // Enter the Key ID generated from the Dashboard
            "amount": amount / 100, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Back Me", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="max-w-6xl mx-auto py-16 px-6 text-white">

                <div className="text-center">
                    <h1 className="md:text-5xl text-4xl font-bold">
                        Welcome back, {" "}
                        <span className="nabla md:text-5xl text-3xl">{username}</span>
                    </h1>

                    <p className="mt-4 md:text-lg text-md text-gray-400 max-w-2xl mx-auto">
                        Manage your creator page, track supporters, and grow your community.
                    </p>
                </div>


                <div className="flex flex-col items-center mt-14">

                    {currentUser?.profilepic && (
                        <img
                            src={currentUser.profilepic}
                            width={200}
                            height={200}
                            alt="Profile"
                            className="rounded-full border-4 border-emerald-400 object-cover shadow-[0_0_40px_rgba(16,185,129,.35)]"
                        />
                    )}

                    <h2 className="mt-7 text-3xl md:text-4xl michroma">
                        {username}
                    </h2>

                    <p className="mt-3 text-gray-400 max-w-xl text-center leading-8">
                        Building amazing projects, sharing knowledge,
                        and creating content for developers around the world.
                    </p>


                    <div className="flex gap-5 mt-8">

                        <Link
                            href="/edit"
                            className="rounded-xl flex items-center gap-2 font-sora bg-green-700 px-2 md:px-7 md:py-3 font-semibold hover:bg-green-800 transition"
                        >
                            <SquarePenIcon size={20} className="" /> Edit Profile
                        </Link>

                        <Link
                            // href={`/${username}`}
                            href="/explorecreators"
                            className="rounded-xl border font-sora border-gray-700 px-5 py-2 md:px-7 md:py-3 font-semibold hover:border-emerald-400 hover:text-emerald-400 transition flex justify-center items-center gap-2"
                        >
                            Explore Creators
                            <ArrowRightIcon />
                        </Link>

                    </div>


                    <div className="grid grid-cols-2 gap-12 mt-14">

                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-emerald-400"> ₹{Payments.reduce((total, Payment) => total + Payment.amount, 0)}</h3>
                            <p className="text-gray-400 mt-1">Total Earnings</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-emerald-400">{Payments.length}</h3>
                            <p className="text-gray-400 mt-1">Supporters</p>
                        </div>

                    </div>

                </div>
            </div >


            <div className="payment my-16 flex flex-col lg:flex-row justify-center gap-8 px-6">


                <div className="w-full lg:w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">

                    <h2 className="text-2xl font-bold text-white mb-8">
                        ❤️ Top Supporters
                    </h2>

                    <ul className="space-y-4">
                        {Payments.length === 0 ? (<li className="text-center text-gray-400">
                            No payments here.
                        </li>) : (

                            Payments.map((payment, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <UserIcon size={22} className="text-emerald-400" />

                                        <div>
                                            <p className="text-white font-medium">{payment.name}</p>
                                            <p className="text-xs text-gray-400">{payment.message}</p>
                                        </div>
                                    </div>

                                    <span className="font-semibold text-emerald-400 text-lg">
                                        ₹{payment.amount}
                                    </span>
                                </li>
                            ))
                        )}
                    </ul>
                </div>


                <div className="w-full lg:w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">

                    <h2 className="text-2xl font-bold text-white mb-2">
                        💚 Support {username}
                    </h2>

                    <p className="text-gray-400 mb-6">
                        Every contribution helps creators continue making amazing content.
                    </p>

                    <div className="space-y-4">

                        <input
                            onChange={handleChange}
                            value={paymentform.name}
                            name='name'
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                        />

                        <input
                            onChange={handleChange}
                            value={paymentform.amount}
                            name='amount'
                            type="number"
                            placeholder="Amount (₹)"
                            className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                        />

                        <textarea
                            onChange={handleChange}
                            value={paymentform.message}
                            name='message'
                            rows={4}
                            placeholder="Leave a message for the creator..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                        />

                    </div>

                    <div className="flex gap-3 mt-5">

                        <button className="flex-1 rounded-lg border border-white/10 py-2 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition" onClick={() => pay(5000)}>
                            ₹50
                        </button>

                        <button className="flex-1 rounded-lg border border-white/10 py-2 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition" onClick={() => pay(10000)}>
                            ₹100
                        </button>

                        <button className="flex-1 rounded-lg border border-white/10 py-2 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition" onClick={() => pay(50000)}>
                            ₹500
                        </button>

                    </div>

                    <button
                        //onClick={() => pay(Number.parseInt(paymentform.amount)*100)}
                        //     onClick={() => {
                        //         const amount = (Number.parseInt(paymentform.amount));

                        //         if (amount <= 0 || isNaN(amount)) {
                        //             toast.error("Please enter a valid amount");
                        //             return;
                        //         }
                        //         pay(amount * 100);


                        //     }
                        // }


                        onClick={() => {
                            const amount = Number(paymentform.amount);

                            if (!paymentform.name.trim()) {
                                toast.error("Please enter your name");
                                return;
                            }

                            if (!Number.isFinite(amount) || amount <= 0) {
                                toast.error("Please enter a valid amount");
                                return;
                            }

                            if (amount > 100000) {
                                toast.error("Maximum donation is ₹1,00,000");
                                return;
                            }

                            pay(amount * 100);
                        }}
                        className="mt-6 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,.4)]">
                        Donate Now 🚀
                    </button>

                </div>

            </div >
        </>
    )
}

export default PaymentPage
