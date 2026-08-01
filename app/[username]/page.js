// import Image from "next/image";
// import Link from "next/link";
// import UserIcon from "@/components/UserIcon";
// import SquarePenIcon from "@/components/SquarePenIcon";
// import PaymentPage from "@/components/PaymentPage";
// import { notFound } from 'next/navigation';
// import connectDB from "@/db/connectDB";
// import User from "@/models/user";

// const Username = async ({ params }) => {
//   const { username } = await params;
//   const checkUser = async () => {
//     await connectDB();
//     let u = await User.findOne({ username: params.username })
//     if(!u){
//       return notFound()
//     }
//   }
//   await checkUser()

//   return (
//     <>
//       <PaymentPage username={username} />
//     </>
//   );
// };

// export default Username;

import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDB";
import User from "@/models/user";

const Username = async ({ params }) => {
  const { username } = await params;

  await connectDB();

  const user = await User.findOne({ username });

  if (!user) {
    notFound();
  }

  return <PaymentPage username={username} />;
};

export default Username;
