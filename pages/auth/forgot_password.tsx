import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const Forgot_Password: NextPage = () => {
  return (
    <div>
      <Head>
        <title>!VARIZ - ForgotPassword</title>
      </Head>

      <Header />
      <div className="container mt-20">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <div className="bg-white rounded-sm py-2 px-4 shadow-md">
              <h1 className="text-center text-rose-500 text-2xl font-semibold mt-6 mb-6">ลืมรหัสผ่าน</h1>
                <form>
                    <div className="space-y-4 mb-3">
                        <input type="username" name="email" className="form-control py-2 px-4 bg-gray-200 text-rose-400 border-b-2 border-rose-400" placeholder="อีเมลของคุณ" />
                    </div>
                    <button type="submit" className="w-full bg-rose-200 text-rose-500 p-2 rounded-md shadow-md mb-6 transition ease-out duration-300 hover:bg-rose-400 hover:text-slate-50">
                        <i className="far fa-redo-alt"></i> เปลี่ยนรหัสผ่าน
                    </button>
                </form>

                <div className="w-full h-[1px] bg-purple-400/50 my-3"></div>
                <div className="px-6 text-center text-xs text-gray-400 mt-6">
                      <p>Made with ❤️ by Variz</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
