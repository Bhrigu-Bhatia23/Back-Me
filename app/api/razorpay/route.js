import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import User from "@/models/user";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    let p = await payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({success: false, message: "Order ID not found"})
    }

    let creator = await User.findOne({username: p.to_user})
    const secret = creator.razorSecret

    let q = validatePaymentVerification({
        "order_id": body.razorpay_order_id, "payment_id": body.
            razorpay_payment_id
    }, body.razorpay_signature, secret)

    if (q) {
        const updatedPayment = await payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true })
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/${updatedPayment.to_user}?payment=true`)
    }

    else {
        return NextResponse.json({success: false, message: "Payment Verification Failed"})
    }
}