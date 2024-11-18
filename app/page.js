'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from "./components/Chat";
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};
export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div className={style.appContainer}>
      <section className='{style.sectionContainer}'>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
    </div>
  );
}
