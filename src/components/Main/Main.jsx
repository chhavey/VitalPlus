import React, { useState } from "react";
import "./Main.css";
import { ReactComponent as Afterpay } from "../../assets/afterpay.svg";
import Accordion from "../Accordion/Accordion";
import Carousel from "../Carousel/Carousel";

function Main() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="md:mt-8 mb-10">
      <div className="grid w-full gap-4 border-none px-0 md:gap-8 md:px-20 lg:px-24 2xl:px-48">
        <div className="flex w-full md:justify-between flex-row gap-4 md:min-h-screen">
          <div className="md:basis-[45%] md:flex-col hidden md:flex sticky h-fit md:top-10">
            <Carousel />
          </div>

          <div className="md:min-h-screen basis-full md:basis-[45%]">
            <div className="flex flex-col gap-2 md:pt-0 md:mx-auto md:px-0 sticky md:top-0">
              <div className="p-3 md:p-4">
                <div className="grid gap-2">
                  <div className=" md:text-[64px] md:leading-[72px] font-medium text-[28px]">
                    SaunaPod
                  </div>

                  <div className="flex gap-2 items-center justify-start text-lg mt-[-0.5rem]">
                    {/* <div className="lg:flex gap-2 items-center justify-start"> */}
                    <img
                      src={require("../../assets/Stars.png")}
                      alt="rating"
                      className="rating"
                    />
                    <div className="text-[11px] lg:text-sm pt-[2px] lg:pt-1">
                      167 Reviews
                    </div>
                    {/* </div> */}
                    <div className="text-sm pt-1">|</div>
                    <div className="text-[11px] lg:text-sm pt-[2px] lg:pt-1">
                      10,000+ Happy Customers
                    </div>
                  </div>

                  <div className="price flex items-center mb-10mb-0 text-[18px] md:text-2xl font-medium mt-[-0.5rem]">
                    <span className="sr-only opacity-40 mr-2">Sale price</span>
                    <s className="strike opacity-30 mr-1">$695</s>
                    <span className=" mr-2 text-red">$395</span>
                    <span className=" rounded-md bg-red text-xs py-[2px] text-white p-1 font-bold">
                      SAVE $300
                    </span>
                  </div>

                  <div className="flex items-center text-sm flex-wrap mt-[-0.7rem]">
                    <span>or 4 interest-free payments of&nbsp;</span>
                    <strong>$98.75</strong>
                    <span>&nbsp;with&nbsp;</span>
                    <span>
                      <Afterpay />
                    </span>
                    <span>&nbsp;ⓘ</span>
                  </div>

                  <div className="sm:block md:hidden">
                    <Carousel />
                  </div>

                  <div className="mt-6 mb-8 md:mt-6 md:mb-10">
                    <div>
                      <h2 style={{ textAlign: "center" }}>
                        <strong>
                          Our BIGGEST sale ever
                          <br />
                        </strong>
                      </h2>
                      <p>
                        <br />
                      </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <strong>
                        <span style={{ color: "#db2525" }}>
                          SAVE $300
                          <br />
                          <br />
                        </span>
                      </strong>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <strong>Sale extended - Final days¬†</strong>
                    </div>
                  </div>

                  <div>
                    <p className="text-left pb-2">Purchase options</p>
                    <div
                      className={`rounded py-2 px-3 ${
                        selectedOption === 1 && `active bg-[#222222]/[.04]`
                      } `}
                    >
                      <div className="flex items-center gap-3 text-[#222] font-instrument-sans">
                        <div
                          className={`circle ${
                            selectedOption === 1 ? "selected" : ""
                          }`}
                          onClick={() => handleOptionChange(1)}
                        ></div>
                        <div className="flex max-h-28 w-full justify-between items-center">
                          <div className="flex w-full justify-between lg:w-[75%]">
                            <div className="mr-4">
                              <p className="font-semibold text-lg">SaunaPod</p>

                              <p className="flex items-baseline font-medium mt-1">
                                <span className="line-through text-lg mr-1 opacity-40">
                                  $695
                                </span>

                                <span className="text-xl font-semibold text-red">
                                  $395
                                </span>
                              </p>
                            </div>
                            <div className="text-xs w-[50%]">
                              <ul className="list-disc">
                                <li>SaunaPod</li>
                              </ul>
                            </div>
                          </div>
                          <div className="hidden lg:block rounded-sm basis-[20%]">
                            <div className="flex aspect-auto w-full object-cover h-full object-contain rounded-sm">
                              <img
                                src="//getvitalplus.com/cdn/shop/files/solosauna1_1.jpg?v=1705011880&amp;width=2200"
                                alt="SaunaPod"
                                width="2200"
                                height="2200"
                                className="aspect-auto w-full object-cover h-full object-contain rounded-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`rounded py-2 px-3 ${
                        selectedOption === 2 && `active bg-[#222222]/[.04]`
                      } `}
                    >
                      <div className="flex items-center justify-center gap-3 text-[#222] font-instrument-sans">
                        <div
                          className={`circle ${
                            selectedOption === 2 ? "selected" : ""
                          }`}
                          onClick={() => handleOptionChange(2)}
                        ></div>

                        <div className="flex max-h-28 w-full justify-between items-center">
                          <div className="flex w-full justify-between lg:w-[75%]">
                            <div className="mr-4">
                              <p className="font-semibold text-lg">SaunaPod</p>

                              <p className="text-xs"> Ultimate Starter Pack</p>

                              <p className="flex items-baseline font-medium mt-1">
                                <span className="line-through text-lg mr-1 opacity-40">
                                  $815
                                </span>

                                <span className="text-xl font-semibold text-red">
                                  $495
                                </span>
                              </p>
                            </div>

                            <div className="text-xs w-[50%]">
                              <ul className="list-disc">
                                <li>SaunaPod</li>
                                <li>Bamboo seat and mat</li>
                                <li>Water-absorbent floor mat</li>
                                <li>+1 year extended warranty</li>
                              </ul>
                            </div>
                          </div>
                          <div className="hidden lg:block rounded-sm basis-[20%]">
                            <div className="flex aspect-auto w-full object-cover h-full object-contain rounded-sm">
                              <img
                                src="//getvitalplus.com/cdn/shop/files/ScreenShot2024-01-19at1.15.07pm.png?v=1705632593&amp;width=864"
                                alt="SaunaPod: Ultimate Starter Pack"
                                width="864"
                                height="862"
                                className="aspect-auto w-full object-cover h-full object-contain rounded-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mb-10">
                    <div className="w-full button-black text-white text-center font-medium">
                      <span>Add to cart</span>
                    </div>

                    <div className="mt-4">
                      <div className="button-blue w-full">
                        <span>Buy with</span>
                        <span>
                          <img
                            src={require("../../assets/shopPay.png")}
                            alt="shoppay"
                            className="w-20 ml-[-0.25rem]"
                          />
                        </span>
                      </div>
                      <div className="more-options">More payment Options</div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[16px] border border-[#22222233] flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7">
                        <img
                          src="//getvitalplus.com/cdn/shop/files/icon__truck.svg?v=1692576286&amp;width=28"
                          alt=""
                          width="28"
                          height="28"
                          loading="lazy"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between flex-grow">
                        <div className="text-[#222] font-medium">
                          Free shipping
                        </div>
                        <div className="text-[#222]">Ships from Sydney</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7">
                        <img
                          src="//getvitalplus.com/cdn/shop/files/clock_icon_2f4d5cce-cad5-42e8-ad4b-e12593ca4077.svg?v=1693270167&amp;width=28"
                          alt=""
                          width="28"
                          height="28"
                          loading="lazy"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between flex-grow">
                        <div className="text-[#222] font-medium">
                          Current delivery time
                        </div>
                        <div className="text-[#222]">2 - 5 business days</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7">
                        <img
                          src="//getvitalplus.com/cdn/shop/files/box_icon_881c0ace-04b8-4b8e-b276-b266cd41e7de.svg?v=1693270178&amp;width=28"
                          alt=""
                          width="28"
                          height="28"
                          loading="lazy"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between flex-grow">
                        <div className="text-[#222] font-medium">
                          Easy returns
                        </div>
                        <div className="text-[#222]">90 day return policy</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7">
                        <img
                          src="//getvitalplus.com/cdn/shop/files/warranty_cropped.png?v=1699000814&amp;width=300"
                          alt=""
                          width="28"
                          height="28"
                          loading="lazy"
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-between flex-grow">
                        <div className="text-[#222] font-medium">
                          Full warranty
                        </div>
                        <div className="text-[#222]">1 year full warranty</div>
                      </div>
                    </div>
                  </div>

                  <Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
