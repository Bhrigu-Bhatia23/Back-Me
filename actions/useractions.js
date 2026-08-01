"use server";

import Razorpay from "razorpay";
import Payment from "@/models/payment";
import User from "@/models/user";
import Contact from "@/models/contact";
import connectDB from "@/db/connectDB";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  const user = await User.findOne({ username: to_username });

  if (!user) {
    throw new Error("User not found");
  }

  const instance = new Razorpay({
    key_id: user.razorID,
    key_secret: user.razorSecret,
  });

  const options = {
    amount: Number(amount),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  await Payment.create({
    oid: order.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return order;
};

export const fetchUserByEmail = async (email) => {
  await connectDB();

  const u = await User.findOne({ email });
  return u?.toObject({ flattenObjectIds: true }) ?? null;
};

export const fetchUserByUsername = async (username) => {
  await connectDB();

  console.log("Searching for:", username);

  const u = await User.findOne({ username });

  console.log("Found user:", u);

  return u?.toObject({ flattenObjectIds: true }) ?? null;
};

export const fetchPayment = async (username) => {
  await connectDB();

  const payments = await Payment.find({
    to_user: username,
    done: true,
  })
    .sort({ amount: -1 }).limit(5)
    .lean();

  return payments.map((payment) => ({
    ...payment,
    _id: payment._id.toString(),
    createdAt: payment.createdAt?.toISOString(),
    updatedAt: payment.updatedAt?.toISOString(),
  }));
};

const info = async (data) => {
  await connectDB();

  await Contact.create({
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
  });

  return { success: true };
};

export default info;

export const updateUser = async (data, oldusername) => {
  await connectDB();

  const ndata = Object.fromEntries(data);
  ndata.username = ndata.username.trim().replace(/\s+/g, "_");

  console.log("Received FormData:", ndata);
  console.log("Old username:", oldusername);
  console.log("New username:", ndata.username);

  if (oldusername !== ndata.username) {
    const existingUser = await User.findOne({
      username: ndata.username,
    });

    if (existingUser) {
      return { error: "Username already exists" };
    }

    await User.updateOne(
      { email: ndata.email },
      ndata
    );

    // await Payment.updateMany(
    //   { to_user: oldusername },
    //   { to_user: ndata.username }
    // );
    const result = await Payment.updateMany(
      { to_user: oldusername },
      { $set: { to_user: ndata.username } }
    );

    console.log("Update Result:", result);
  } else {
    await User.updateOne(
      { email: ndata.email },
      ndata
    );
  }

  return { success: true };
};

const getAllCreators = async () => {
  await connectDB();

  const creators = await User.find();

  const updatedCreators = creators.map(async (creator) => {
    const payments = await Payment.find({
      to_user: creator.username,
    });

    const supporters = payments.length;

    const amountRaised = payments.reduce(
      (total, payment) => total + payment.amount,
      0
    );

    return JSON.parse(
      JSON.stringify({
        ...creator.toObject(),
        supporters,
        amountRaised,
      })
    );
  });

  return await Promise.all(updatedCreators);
};

export { getAllCreators };