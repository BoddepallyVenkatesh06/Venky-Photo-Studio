import { SearchBox } from "../hero/Hero";

export const SearchHeader = () => {
  return (
    <>
      <section className="header">
        <div className="px-5 py-4 flex items-center justify-between border border-gray-300">
          <div className="logo mr-8 flex justify-center items-center">
            <img src="./images/logo_blue.png" className="min-w-[52px] w-[52px]" />
            <span className="uppercase text-[#00BCD4] font-semibold tracking-[1px] ms-3 whitespace-nowrap">apostle <br />photo service</span>
          </div>
          <div className="w-full py-2 ms-7 me-3">
            <SearchBox color="bg-[rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </section>
    </>
  );
};
