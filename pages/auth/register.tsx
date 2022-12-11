import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>!VARIZ - Register</title>
      </Head>

      <Header />
      <div className="container mt-10">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <div className="bg-white rounded-sm py-2 px-4 shadow-md">
              <h1 className="text-center text-green-500 text-2xl font-semibold mt-6 mb-6">สร้างบัญชีผู้ใช้ Variz</h1>
                <form>
                    <div className="space-y-4 mb-3">
                        <input type="username" name="username" className="form-control py-2 px-4 bg-gray-200 text-green-500 border-b-2 rounded-sm border-green-400 focus:bg-gray-100" placeholder="ชื่อผู้ใช้" />
                        <input type="password" name="password" className="form-control py-2 px-4 bg-gray-200 text-green-500 border-b-2 rounded-sm border-green-400 focus:bg-gray-100" placeholder="รหัสผ่าน" />
                        <input type="password" name="confirm_password" className="form-control py-2 px-4 bg-gray-200 text-green-500 border-b-2 rounded-sm border-green-400 focus:bg-gray-100" placeholder="ยืนยันรหัสผ่าน" />
                        <input type="email" name="email" className="form-control w-full py-2 px-4 bg-gray-200 text-green-500 border-b-2 rounded-sm border-green-400 focus:bg-gray-100" placeholder="อีเมล" />
                    </div>
                    <div className="flex justify-between text-xs mb-3">
                        <p className="text-xs text-emerald-400/80">มีบัญชีผู้ใช้อยู่แล้ว?
                        <span>
                            <Link className="text-green-400 hover:text-green-500" href="/auth/login">
                                เข้าสู่ระบบ?
                            </Link>
                        </span>
                        </p>
                    </div>
                    <button type="submit" className="w-full bg-green-200 text-green-500 p-2 rounded-md shadow-md mb-6 transition ease-out duration-300 hover:bg-green-400 hover:text-slate-50">
                      <i className="far fa-user-plus"></i> สร้างบัญชี
                    </button>
                </form>
                <div className="w-full h-[1px] bg-green-400/50 my-3"></div>
                <p className="text-sm text-center text-green-500 mb-2">หรือสร้างบัญชีด้วย</p>
                <div className="flex justify-center">
                  <button className="mx-1" type="button">
                    <img className="w-[40px] h-[40px] rounded-md shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md" src="https://smoslockshop.com/images/discord_logo.jpeg" alt="discord_logo" />     
                  </button>
                  <button className="mx-1" type="button">
                    <img className="w-[40px] h-[40px] rounded-md shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md" src="https://xenonhub.net/_nuxt/img/facebook.cc97333.png" alt="facebook_logo" />     
                  </button>
                </div>

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

export default Login;
