import Link from "next/link";

const Footer = () => {
  return (
    <div>
        <footer className="bg-white p-4">
            <div className="flex justify-center items-center">
                <div className="px-6 text-center text-xs text-gray-400">
                    <p>© 2022 Variz Services</p>
                    <p>Made with ❤️ by Variz</p>
                </div>
                <div className="h-8 border-r border-gray-300"></div>
                <div className="flex flex-col text-xs text-gray-400 px-6">
                <p className="font-semibold text-blue-400">เอกสาร</p>
                <Link className="transition hover:text-black" href="#">
                    นโยบายความเป็นส่วนตัว
                </Link>
                <Link className="transition hover:text-black" href="#">
                    ข้อกำหนดการใช้งาน
                </Link>
                </div>
            </div>
        </footer>
        <script src="/scripts/bootstrap.js"></script>
    </div>
  );
};

export default Footer;
