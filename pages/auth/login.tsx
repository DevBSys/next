import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

const Login: NextPage = () => {
  return (
    
    <div>
      <Head>
        <title>!VARIZ - Login</title>
      </Head>

      <Header />
      <div className="container mt-20">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <div className="bg-white rounded-sm py-2 px-4 shadow-md">
              <h1 className="text-center text-purple-500 text-2xl font-semibold mt-6 mb-6">ยินดีต้อนรับเข้าสู่ Variz</h1>
                <form>
                    <div className="space-y-4 mb-3">
                        <input type="username" name="username" className="form-control py-2 px-4 bg-gray-200 text-purple-400 border-b-2 border-purple-400" placeholder="ชื่อผู้ใช้" />
                        <input type="password" name="password" className="form-control py-2 px-4 bg-gray-200 text-purple-400 border-b-2 border-purple-400" placeholder="รหัสผ่าน" />
                    </div>
                    <div className="flex justify-between text-xs mb-3">
                        <Link className="text-purple-400" href="/auth/forgot_password">
                            ลืมรหัสผ่าน?
                        </Link>
                        <p className="text-xs text-purple-400/60">ยังไม่มีบัญชีผู้ใช้?
                        <span>
                            <Link className="text-purple-400" href="/auth/register">
                                สร้างบัญชี
                            </Link>
                        </span>
                        </p>
                    </div>
                    <button type="submit" className="w-full bg-purple-200 text-purple-500 p-2 rounded-md shadow-md mb-6 transition ease-out duration-300 hover:bg-purple-400 hover:text-slate-50">
                      <i className="far fa-sign-in"></i> เข้าสู่ระบบ
                    </button>
                </form>

                <div className="w-full h-[1px] bg-purple-400/50 my-3"></div>
                <p className="text-sm text-center text-purple-500 mb-2">หรือเข้าสู่ระบบด้วย</p>
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
