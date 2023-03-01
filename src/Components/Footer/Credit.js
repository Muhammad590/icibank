import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../../styles/style4.css";
import platinum from "../../Images/platinum.jpg";
import creditone from "../../Images/creditone.jpg";
import rubxy from "../../Images/rubxy.jpg";
import sapphiro from "../../Images/sapphiro.jpg";
function Credit() {
  const [activeItem, setActiveItem] = useState(1);
  const changeStatus = (val) => {
    setActiveItem(val);
  };
  return (
    <>
      <div>
        <div class="tabsiconcarousel tabs aem-GridColumn aem-GridColumn--default--12">
          <div
            id="tabsiconcarousel-69b888989f"
            class="cmp-tabs"
            data-cmp-is="tabs"
            data-placeholder-text="false"
          >
            <div
              id="find-product-servlet-path"
              class="section calculators-section tabs-two-column"
              data-frpServletPath="/content/icicibank/in/en.productlist.json"
              data-expPath="/content/experience-fragments/icicibank/language-masters/en/find_right_product"
              data-locale="en_in"
            >
              <ul
                role="tablist"
                class="cmp-tabs__tablist nav nav-tabs wow fadeInUp"
                aria-multiselectable="false"
              >
                <li
                  role="tab"
                  id="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                  class="find-right
          cmp-tabs__tab
          cmp-tabs__tab--active
          active
          
        "
                  aria-controls="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                  tabindex="0"
                  data-cmp-hook-tabs="tab"
                >
                  <a class="tabs-icon" data-toggle="tab">
                    FIND THE RIGHT PRODUCT FOR YOU{" "}
                  </a>
                </li>

                <li
                  role="tab"
                  id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                  class="find-right
          cmp-tabs__tab
          
        "
                  aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                  tabindex="-1"
                  data-cmp-hook-tabs="tab"
                >
                  <a class="tabs-icon" data-toggle="tab">
                    {" "}
                    LIFE STAGE SOLUTIONS{" "}
                  </a>
                </li>
              </ul>
              <div class="tab-content wow fadeInUp">
                <div
                  id="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                  role="tabpanel"
                  aria-labelledby="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                  tabindex="0"
                  class="
          section-inner
          cmp-tabs__tabpanel
          cmp-tabs__tabpanel--active
          animated
          fadeIn
        "
                  data-cmp-hook-tabs="tabpanel"
                >
                  <div class="findright">
                    <div class="section desktop-section">
                      <div class="hide" id="defaultMainCategory"></div>
                      <div class="hide" id="defaultSubCategory">
                        {" "}
                      </div>
                      <diV class="select-filter selectDivOne">
                        <label>I am interested in:</label>
                        <select
                          name="intSelectOne"
                          id="intSelectOne"
                          class="intSelectOne selectCredit"
                        >
                          <option>Cards</option>
                          <option>Deposit</option>
                          <option>Insurance</option>
                          <option>Select</option>
                          <option>Select</option>
                          <option>Select</option>
                        </select>
                        <label>for</label>
                        <select
                          name="intSelectTwo"
                          id="intSelectTwo"
                          class="intSelectTwo selectCreditTwo"
                        >
                          <option>Benefits and Rewards</option>
                          <option>Travel</option>
                          <option>Shoping</option>
                          <option>Select</option>
                          <option>Select</option>
                          <option>Select</option>
                        </select>
                      </diV>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container creditPics">
              {activeItem === 1 && (
                <Row>
                  <Col xl={5} lg={5} md={12} sm={12}>
                    <div>
                      <img src={platinum} className="PlatinumCard" />
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={12} sm={12}>
                    <div
                      style={{ paddingRight: "30rem" }}
                      id="find-product-servlet-path"
                      class="section calculators-section tabs-two-column"
                      data-frpServletPath="/content/icicibank/in/en.productlist.json"
                      data-expPath="/content/experience-fragments/icicibank/language-masters/en/find_right_product"
                      data-locale="en_in"
                    >
                      <ul
                        role="tablist"
                        class="cmp-tabs__tablist nav nav-tabs wow fadeInUp"
                        aria-multiselectable="false"
                      >
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                          class="find-right
          cmp-tabs__tab
          cmp-tabs__tab--active
          active
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                          tabindex="0"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            LIFESTYLE
                          </a>
                        </li>

                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            TRAVEL
                          </a>
                        </li>
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            SPORTS
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="annualLakh">
                      <p>Your Net Annual Income (In Lakhs)</p>
                      <div>
                        <div class="radio-style-box multi-radio-selector ">
                          <div
                            class="radio-wrap"
                            onClick={() => changeStatus(1)}
                          >
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                            />
                            <span class="checkmark">2.5</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(2)} >
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                              
                            />
                            <span class="checkmark">5</span>
                          </div>

                          <div class="radio-wrap"   onClick={() => changeStatus(3)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                             
                            />
                            <span class="checkmark">10</span>
                          </div>

                          <div class="radio-wrap"   onClick={() => changeStatus(4)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                             
                            />
                            <span class="checkmark">15</span>
                          </div>
                        </div>

                        <div className="PlatinumCardDivOne">
                          <h4 className="PlatinumCardDivOnehead">
                            Platinum Chip Credit Card
                          </h4>

                          <p className="PlatinumCardDivOneParqa">
                            • No Joining Fee. No Annual Fee
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Earn ICICI Bank Rewards Points on your spends
                            except fuel
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Exclusive Dinning Offers through Cupnary Treats
                            Programme
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Save on 1% fuel surcharge, waived off at HPCL
                            petrol pumps
                          </p>
                        </div>
                        <div class="buttons">
                          <a
                            href="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            target="_blank"
                            data-app="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            data-app-android="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            data-app-ios="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            class="ic-btn deeplinking"
                          >
                            Apply Now
                          </a>

                          <a
                            href="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            target="_blank"
                            data-app="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-android="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-ios="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            class="ic-more deeplinking"
                          >
                            Know More
                          </a>
                        </div>

                        <div class="loan-forms callback-loan-form lead-callback backwhite">
                          <div class="text-left getACALL">
                            Get a call back to know best offer on credit cards
                          </div>
                          <div class="content">
                            <form
                              name="offer-form"
                              id="offer-form"
                              class="offer-form"
                              ajax-page="/content/icicibank.apigee.json?"
                            >
                              <div class="form-slider slick-initialized slick-slider slick-dotted">
                                <button
                                  class="slick-prev slick-arrow slick-disabled arrow-disable"
                                  aria-label="Previous"
                                  type="button"
                                  aria-disabled="true"
                                  style={{ display: "inline-block" }}
                                >
                                  Previous
                                </button>

                                <div class="slick-list">
                                  <div
                                    class="slick-track"
                                    style={{
                                      opacity: "1",
                                      width: "975px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  >
                                    <div
                                      class="form-group slick-slide slick-current slick-active"
                                      style={{ width: "325px" }}
                                      tabindex="0"
                                      role="tabpanel"
                                      id="slick-slide100"
                                      aria-describedby="slick-slide-control100"
                                      data-slick-index="0"
                                      aria-hidden="false"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/user.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            class="input-name"
                                            id="name"
                                            autocomplete="off"
                                            tabindex="0"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide101"
                                      aria-describedby="slick-slide-control101"
                                      data-slick-index="1"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/phone-icon.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            class="input-mobile"
                                            id="mobile"
                                            maxlength="10"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide102"
                                      aria-describedby="slick-slide-control102"
                                      data-slick-index="2"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/email.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="input-email"
                                            id="email"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  class="slick-next slick-arrow arrow-disable"
                                  aria-label="Next"
                                  type="button"
                                  aria-disabled="false"
                                >
                                  Next
                                </button>
                                <ul class="slick-dots" role="tablist">
                                  <li class="slick-active" role="presentation">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control100"
                                      aria-controls="slick-slide100"
                                      aria-label="1 of 3"
                                      tabindex="0"
                                      aria-selected="true"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control101"
                                      aria-controls="slick-slide101"
                                      aria-label="2 of 3"
                                      tabindex="-1"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control102"
                                      aria-controls="slick-slide102"
                                      aria-label="3 of 3"
                                      tabindex="-1"
                                    >
                                      3
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {activeItem === 2 && (
                <Row>
                  <Col xl={5} lg={5} md={12} sm={12}>
                    <div>
                      <img src={creditone} className="PlatinumCard" />
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={12} sm={12}>
                    <div
                      style={{ paddingRight: "30rem" }}
                      id="find-product-servlet-path"
                      class="section calculators-section tabs-two-column"
                      data-frpServletPath="/content/icicibank/in/en.productlist.json"
                      data-expPath="/content/experience-fragments/icicibank/language-masters/en/find_right_product"
                      data-locale="en_in"
                    >
                      <ul
                        role="tablist"
                        class="cmp-tabs__tablist nav nav-tabs wow fadeInUp"
                        aria-multiselectable="false"
                      >
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                          class="find-right
          cmp-tabs__tab
          cmp-tabs__tab--active
          active
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                          tabindex="0"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            LIFESTYLE
                          </a>
                        </li>

                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            TRAVEL
                          </a>
                        </li>
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            SPORTS
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="annualLakh">
                      <p>Your Net Annual Income (In Lakhs)</p>
                      <div>
                        <div class="radio-style-box multi-radio-selector ">
                          <div class="radio-wrap"   onClick={() => changeStatus(1)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                             
                            />
                            <span class="checkmark">2.5</span>
                          </div>

                          <div class="radio-wrap"   onClick={() => changeStatus(2)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                              checked="checked"
                            />
                            <span class="checkmark">5</span>
                          </div>

                          <div class="radio-wrap"   onClick={() => changeStatus(3)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                            />
                            <span class="checkmark">10</span>
                          </div>

                          <div class="radio-wrap"   onClick={() => changeStatus(4)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                            
                            />
                            <span class="checkmark">15</span>
                          </div>
                        </div>

                        <div className="PlatinumCardDivOne">
                          <h4 className="PlatinumCardDivOnehead">
                            Coral Credit Card
                          </h4>

                          <p className="PlatinumCardDivOneParqa">
                            • Joining fee 500 + GST
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Earn up to 10,000 additional reward points
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Buy 1, get 1 movie ticket free at BookMyShow
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • One complimentary railway lounge visit per quarter
                          </p>
                        </div>
                        <div class="buttons">
                          <a
                            href="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            target="_blank"
                            data-app="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            data-app-android="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            data-app-ios="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            class="ic-btn deeplinking"
                          >
                            Apply Now
                          </a>

                          <a
                            href="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            target="_blank"
                            data-app="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-android="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-ios="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            class="ic-more deeplinking"
                          >
                            Know More
                          </a>
                        </div>

                        <div class="loan-forms callback-loan-form lead-callback backwhite">
                          <div class="text-left getACALL">
                            Get a call back to know best offer on credit cards
                          </div>
                          <div class="content">
                            <form
                              name="offer-form"
                              id="offer-form"
                              class="offer-form"
                              ajax-page="/content/icicibank.apigee.json?"
                            >
                              <div class="form-slider slick-initialized slick-slider slick-dotted">
                                <button
                                  class="slick-prev slick-arrow slick-disabled arrow-disable"
                                  aria-label="Previous"
                                  type="button"
                                  aria-disabled="true"
                                  style={{ display: "inline-block" }}
                                >
                                  Previous
                                </button>

                                <div class="slick-list">
                                  <div
                                    class="slick-track"
                                    style={{
                                      opacity: "1",
                                      width: "975px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  >
                                    <div
                                      class="form-group slick-slide slick-current slick-active"
                                      style={{ width: "325px" }}
                                      tabindex="0"
                                      role="tabpanel"
                                      id="slick-slide100"
                                      aria-describedby="slick-slide-control100"
                                      data-slick-index="0"
                                      aria-hidden="false"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/user.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            class="input-name"
                                            id="name"
                                            autocomplete="off"
                                            tabindex="0"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide101"
                                      aria-describedby="slick-slide-control101"
                                      data-slick-index="1"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/phone-icon.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            class="input-mobile"
                                            id="mobile"
                                            maxlength="10"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide102"
                                      aria-describedby="slick-slide-control102"
                                      data-slick-index="2"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/email.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="input-email"
                                            id="email"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  class="slick-next slick-arrow arrow-disable"
                                  aria-label="Next"
                                  type="button"
                                  aria-disabled="false"
                                >
                                  Next
                                </button>
                                <ul class="slick-dots" role="tablist">
                                  <li class="slick-active" role="presentation">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control100"
                                      aria-controls="slick-slide100"
                                      aria-label="1 of 3"
                                      tabindex="0"
                                      aria-selected="true"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control101"
                                      aria-controls="slick-slide101"
                                      aria-label="2 of 3"
                                      tabindex="-1"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control102"
                                      aria-controls="slick-slide102"
                                      aria-label="3 of 3"
                                      tabindex="-1"
                                    >
                                      3
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {activeItem === 3 && (
                <Row>
                  <Col xl={5} lg={5} md={12} sm={12}>
                    <div>
                      <img src={rubxy} className="PlatinumCard" />
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={12} sm={12}>
                    <div
                      style={{ paddingRight: "30rem" }}
                      id="find-product-servlet-path"
                      class="section calculators-section tabs-two-column"
                      data-frpServletPath="/content/icicibank/in/en.productlist.json"
                      data-expPath="/content/experience-fragments/icicibank/language-masters/en/find_right_product"
                      data-locale="en_in"
                    >
                      <ul
                        role="tablist"
                        class="cmp-tabs__tablist nav nav-tabs wow fadeInUp"
                        aria-multiselectable="false"
                      >
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                          class="find-right
          cmp-tabs__tab
          cmp-tabs__tab--active
          active
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                          tabindex="0"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            LIFESTYLE
                          </a>
                        </li>

                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            TRAVEL
                          </a>
                        </li>
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            SPORTS
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="annualLakh">
                      <p>Your Net Annual Income (In Lakhs)</p>
                      <div>
                        <div class="radio-style-box multi-radio-selector ">
                          <div class="radio-wrap"  onClick={() => changeStatus(1)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                             
                            />
                            <span class="checkmark">2.5</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(2)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                              checked="checked"
                            />
                            <span class="checkmark">5</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(3)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                            />
                            <span class="checkmark">10</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(4)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                            
                            />
                            <span class="checkmark">15</span>
                          </div>
                        </div>

                        <div className="PlatinumCardDivOne">
                          <h4 className="PlatinumCardDivOnehead">
                            Rubyx Credit Card
                          </h4>

                          <p className="PlatinumCardDivOneParqa">
                            • Exclusive privileges - entertainment, dining,
                            wellness and golf
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Complimentary airport lounge access
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Buy 1, get 1 movie ticket free at BookMyShow
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Welcome Vouchers on Shopping and Travel worth Rs
                            5000
                          </p>
                        </div>
                        <div class="buttons">
                          <a
                            href="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            target="_blank"
                            data-app="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            data-app-android="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            data-app-ios="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            class="ic-btn deeplinking"
                          >
                            Apply Now
                          </a>

                          <a
                            href="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            target="_blank"
                            data-app="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-android="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-ios="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            class="ic-more deeplinking"
                          >
                            Know More
                          </a>
                        </div>

                        <div class="loan-forms callback-loan-form lead-callback backwhite">
                          <div class="text-left getACALL">
                            Get a call back to know best offer on credit cards
                          </div>
                          <div class="content">
                            <form
                              name="offer-form"
                              id="offer-form"
                              class="offer-form"
                              ajax-page="/content/icicibank.apigee.json?"
                            >
                              <div class="form-slider slick-initialized slick-slider slick-dotted">
                                <button
                                  class="slick-prev slick-arrow slick-disabled arrow-disable"
                                  aria-label="Previous"
                                  type="button"
                                  aria-disabled="true"
                                  style={{ display: "inline-block" }}
                                >
                                  Previous
                                </button>

                                <div class="slick-list">
                                  <div
                                    class="slick-track"
                                    style={{
                                      opacity: "1",
                                      width: "975px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  >
                                    <div
                                      class="form-group slick-slide slick-current slick-active"
                                      style={{ width: "325px" }}
                                      tabindex="0"
                                      role="tabpanel"
                                      id="slick-slide100"
                                      aria-describedby="slick-slide-control100"
                                      data-slick-index="0"
                                      aria-hidden="false"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/user.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            class="input-name"
                                            id="name"
                                            autocomplete="off"
                                            tabindex="0"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide101"
                                      aria-describedby="slick-slide-control101"
                                      data-slick-index="1"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/phone-icon.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            class="input-mobile"
                                            id="mobile"
                                            maxlength="10"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide102"
                                      aria-describedby="slick-slide-control102"
                                      data-slick-index="2"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/email.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="input-email"
                                            id="email"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  class="slick-next slick-arrow arrow-disable"
                                  aria-label="Next"
                                  type="button"
                                  aria-disabled="false"
                                >
                                  Next
                                </button>
                                <ul class="slick-dots" role="tablist">
                                  <li class="slick-active" role="presentation">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control100"
                                      aria-controls="slick-slide100"
                                      aria-label="1 of 3"
                                      tabindex="0"
                                      aria-selected="true"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control101"
                                      aria-controls="slick-slide101"
                                      aria-label="2 of 3"
                                      tabindex="-1"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control102"
                                      aria-controls="slick-slide102"
                                      aria-label="3 of 3"
                                      tabindex="-1"
                                    >
                                      3
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {activeItem === 4 && (
                <Row>
                  <Col xl={5} lg={5} md={12} sm={12}>
                    <div>
                      <img src={sapphiro} className="PlatinumCard" />
                    </div>
                  </Col>
                  <Col xl={7} lg={7} md={12} sm={12}>
                    <div
                      style={{ paddingRight: "30rem" }}
                      id="find-product-servlet-path"
                      class="section calculators-section tabs-two-column"
                      data-frpServletPath="/content/icicibank/in/en.productlist.json"
                      data-expPath="/content/experience-fragments/icicibank/language-masters/en/find_right_product"
                      data-locale="en_in"
                    >
                      <ul
                        role="tablist"
                        class="cmp-tabs__tablist nav nav-tabs wow fadeInUp"
                        aria-multiselectable="false"
                      >
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-21b8634baa-tab"
                          class="find-right
          cmp-tabs__tab
          cmp-tabs__tab--active
          active
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-21b8634baa-tabpanel"
                          tabindex="0"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            LIFESTYLE
                          </a>
                        </li>

                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            TRAVEL
                          </a>
                        </li>
                        <li
                          role="tab"
                          id="tabsiconcarousel-69b888989f-item-749e3130d9-tab"
                          class="find-right
          cmp-tabs__tab
          
        "
                          aria-controls="tabsiconcarousel-69b888989f-item-749e3130d9-tabpanel"
                          tabindex="-1"
                          data-cmp-hook-tabs="tab"
                        >
                          <a class="tabs-icon" data-toggle="tab">
                            SPORTS
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="annualLakh">
                      <p>Your Net Annual Income (In Lakhs)</p>
                      <div>
                        <div class="radio-style-box multi-radio-selector ">
                          <div class="radio-wrap"  onClick={() => changeStatus(1)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                             
                            />
                            <span class="checkmark">2.5</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(2)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                              checked="checked"
                            />
                            <span class="checkmark">5</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(3)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                              
                            />
                            <span class="checkmark">10</span>
                          </div>

                          <div class="radio-wrap"  onClick={() => changeStatus(4)}>
                            <input
                              type="radio"
                              name="product-tab-0"
                            
                              onchange="handleChangeLifestyleIncome()"
                            />
                            <span class="checkmark">15</span>
                          </div>
                        </div>

                        <div className="PlatinumCardDivOne">
                          <h4 className="PlatinumCardDivOnehead">
                            Sapphiro Credit Card
                          </h4>

                          <p className="PlatinumCardDivOneParqa">
                            • Exclusive privileges - entertainment, dining,
                            wellness and golf
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Complimentary membership to the Dreamfolks
                            DragonPass programme
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Buy 1, get 1 movie ticket free at BookMyShow
                          </p>
                          <p className="PlatinumCardDivOneParqa">
                            • Welcome Vouchers on Shopping and Travel worth Rs
                            10,000
                          </p>
                        </div>
                        <div class="buttons">
                          <a
                            href="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            target="_blank"
                            data-app="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-d"
                            data-app-android="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            data-app-ios="https://buy.icicibank.com/ucj/cc/mobile?ius=IS83006US&amp;iup=UCC00476&amp;ITM=nli_cms_CC_findhterightproduct_platinum_applynowbtn-m"
                            class="ic-btn deeplinking"
                          >
                            Apply Now
                          </a>

                          <a
                            href="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            target="_blank"
                            data-app="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-android="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            data-app-ios="https://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-chip/key-privileges.page?ITM=nli_cms_CC_lifestyle_platinum_hp_find_right_product_knowmore_btn"
                            class="ic-more deeplinking"
                          >
                            Know More
                          </a>
                        </div>

                        <div class="loan-forms callback-loan-form lead-callback backwhite">
                          <div class="text-left getACALL">
                            Get a call back to know best offer on credit cards
                          </div>
                          <div class="content">
                            <form
                              name="offer-form"
                              id="offer-form"
                              class="offer-form"
                              ajax-page="/content/icicibank.apigee.json?"
                            >
                              <div class="form-slider slick-initialized slick-slider slick-dotted">
                                <button
                                  class="slick-prev slick-arrow slick-disabled arrow-disable"
                                  aria-label="Previous"
                                  type="button"
                                  aria-disabled="true"
                                  style={{ display: "inline-block" }}
                                >
                                  Previous
                                </button>

                                <div class="slick-list">
                                  <div
                                    class="slick-track"
                                    style={{
                                      opacity: "1",
                                      width: "975px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  >
                                    <div
                                      class="form-group slick-slide slick-current slick-active"
                                      style={{ width: "325px" }}
                                      tabindex="0"
                                      role="tabpanel"
                                      id="slick-slide100"
                                      aria-describedby="slick-slide-control100"
                                      data-slick-index="0"
                                      aria-hidden="false"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/user.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your first name"
                                            class="input-name"
                                            id="name"
                                            autocomplete="off"
                                            tabindex="0"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide101"
                                      aria-describedby="slick-slide-control101"
                                      data-slick-index="1"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/phone-icon.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your mobile number"
                                            class="input-mobile"
                                            id="mobile"
                                            maxlength="10"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                    <div
                                      class="form-group slick-slide"
                                      style={{ width: "325px" }}
                                      tabindex="-1"
                                      role="tabpanel"
                                      id="slick-slide102"
                                      aria-describedby="slick-slide-control102"
                                      data-slick-index="2"
                                      aria-hidden="true"
                                    >
                                      <div class="form-group-inner">
                                        <div class="icon">
                                          <img src="/content/dam/icicibank/india/managed-assets/images/homepage/email.png" />
                                        </div>
                                        <div class="input-box">
                                          <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="input-email"
                                            id="email"
                                            autocomplete="off"
                                            tabindex="-1"
                                          />
                                        </div>
                                      </div>
                                      <span class="error-msg"></span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  class="slick-next slick-arrow arrow-disable"
                                  aria-label="Next"
                                  type="button"
                                  aria-disabled="false"
                                >
                                  Next
                                </button>
                                <ul class="slick-dots" role="tablist">
                                  <li class="slick-active" role="presentation">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control100"
                                      aria-controls="slick-slide100"
                                      aria-label="1 of 3"
                                      tabindex="0"
                                      aria-selected="true"
                                    >
                                      1
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control101"
                                      aria-controls="slick-slide101"
                                      aria-label="2 of 3"
                                      tabindex="-1"
                                    >
                                      2
                                    </button>
                                  </li>
                                  <li role="presentation" class="disable-el">
                                    <button
                                      type="button"
                                      role="tab"
                                      id="slick-slide-control102"
                                      aria-controls="slick-slide102"
                                      aria-label="3 of 3"
                                      tabindex="-1"
                                    >
                                      3
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credit;
