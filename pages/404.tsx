import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../components/Header";

export default function Custom404() {
    const router = useRouter()
  return (
    <div>
      <Head>
        <title>404 - ไม่พบหน้าที่คุณต้องการ | !VARIZ</title>
      </Head>

      <Header />
      <div className="container mt-20">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="bg-white rounded-sm py-2 px-4 shadow-md">
              <h1 className="text-center text-rose-500 text-2xl font-semibold mt-6 mb-6">
                404 
              </h1>
              <h5 className="text-center text-md text-gray-400">
                ไม่พบหน้าที่คุณต้องการ หรือ อนิเมะที่คุณต้องสาเหตุที่ไม่พบอนิเมะเรื่องนั้นเพราะทางเรายังไม่ได้อัพเดตเข้ามา
              </h5>
              <h5 className="text-center text-md text-gray-400">
                หากต้องการดูอนิเมะเรื่องดังกล่าวภายในเว็บของเราโปรดติดต่อมาที่
              </h5>
                <button type="button" onClick={() => router.push('/')} className="w-full bg-rose-200 text-rose-500 p-2 rounded-md shadow-md mt-6 transition ease-out duration-300 hover:bg-rose-400 hover:text-slate-50">
                    กลับสู่หน้าหลัก
                </button>
              <div className="w-full h-[1px] bg-rose-500/50 my-3"></div>
              <div className="px-6 text-center text-xs text-gray-400 mt-6">
                <p>Made with ❤️ by Variz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
