import React from "react";
import './assets/css/dashlite.css'
import './assets/css/theme.css'
// import './assets/js/bundle.js'
// import './assets/js/scripts.js'
// import './assets/js/chart-invest.js'

const Header = () => {
    return (
        <React.Fragment>
            <div className="nk-app-root">
                <div className="nk-wrap ">
                    <div className="nk-header nk-header-fluid nk-header-fixed is-theme">
                        <div className="container-xl wide-lg">
                            <div className="nk-header-wrap">
                                <div className="nk-menu-trigger mr-sm-2 d-lg-none">
                                    <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-menu"></em></a>
                                </div>
                                <div className="nk-header-brand">
                                    <a href="html/index.html" className="logo-link">
                                        <img className="logo-light logo-img" src="assets/images/images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                                        <img className="logo-dark logo-img" src="assets/images/images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                                        <span className="nio-version">Invest</span>
                                    </a>
                                </div>
                                <div className="nk-header-menu" data-content="headerNav">
                                    <div className="nk-header-mobile">
                                        <div className="nk-header-brand">
                                            <a href="html/index.html" className="logo-link">
                                                <img className="logo-light logo-img" src="assets/images/images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                                                <img className="logo-dark logo-img" src="assets/images/images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                                                <span className="nio-version">Invest</span>
                                            </a>
                                        </div>
                                        <div className="nk-menu-trigger mr-n2">
                                            <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-arrow-left"></em></a>
                                        </div>
                                    </div>
                                    <ul className="nk-menu nk-menu-main">
                                        <li className="nk-menu-item">
                                            <a href="html/invest/index.html" className="nk-menu-link">
                                                <span className="nk-menu-text">Overview</span>
                                            </a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/invest/schemes.html" className="nk-menu-link">
                                                <span className="nk-menu-text">MY Plan</span>
                                            </a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/invest/invest.html" className="nk-menu-link">
                                                <span className="nk-menu-text">Invest</span>
                                            </a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/invest/profile.html" className="nk-menu-link">
                                                <span className="nk-menu-text">Profile</span>
                                            </a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="#" className="nk-menu-link nk-menu-toggle">
                                                <span className="nk-menu-text">Pages</span>
                                            </a>
                                            <ul className="nk-menu-sub">
                                                <li className="nk-menu-item">
                                                    <a href="html/invest/welcome.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">Welcome / Intro</span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/invest/invest-form.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">Investment Process</span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/invest/scheme-details.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">Investment Details</span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/invest/kyc-application.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">KYC - Get Started</span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/invest/kyc-form.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">KYC - Application Form</span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/index.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">Main Dashboard <em className="icon ni ni-external"></em> </span>
                                                    </a>
                                                </li>
                                                <li className="nk-menu-item">
                                                    <a href="html/components.html" className="nk-menu-link">
                                                        <span className="nk-menu-text">All Components <em className="icon ni ni-external"></em></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nk-header-tools">
                                    <ul className="nk-quick-nav">
                                        <li className="dropdown notification-dropdown">
                                            <a href="#"  className="dropdown-toggle nk-quick-nav-icon" data-toggle="dropdown">
                                               
                                                <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                                                <div className="dropdown-head">
                                                    <span className="sub-title nk-dropdown-title">Notifications</span>
                                                    <a href="#">Mark All as Read</a>
                                                </div>
                                                <div className="dropdown-body">
                                                    <div className="nk-notification">
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                             
                                                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                                <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-notification-item dropdown-inner">
                                                            <div className="nk-notification-icon">
                                                                <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                                            </div>
                                                            <div className="nk-notification-content">
                                                                <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                                                                <div className="nk-notification-time">2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropdown-foot center">
                                                    <a href="#">View All</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="hide-mb-sm"><a href="http://137.184.68.110/login" className="nk-quick-nav-icon"><em className="icon ni ni-signout"></em></a></li>
                                        <li className="dropdown user-dropdown order-sm-first">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <div className="user-toggle">
                                                    <div className="user-avatar sm">
                                                        <em className="icon ni ni-user-alt"></em>
                                                    </div>
                                                    <div className="user-info d-none d-xl-block">
                                                        <div className="user-status user-status-unverified">Unverified</div>
                                                        <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 is-light">
                                                <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                    <div className="user-card">
                                                        <div className="user-avatar">
                                                            <span>AB</span>
                                                        </div>
                                                        <div className="user-info">
                                                            <span className="lead-text">Abu Bin Ishtiyak</span>
                                                            <span className="sub-text">info @softnio.com</span>
                                                        </div>
                                                        <div className="user-action">
                                                            <a className="btn btn-icon mr-n2" href="html/invest/profile-setting.html"><em className="icon ni ni-setting"></em></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropdown-inner user-account-info">
                                                    <h6 className="overline-title-alt">Account Balance</h6>
                                                    <div className="user-balance">1,494.23 <small className="currency currency-usd">USD</small></div>
                                                    <div className="user-balance-sub">Locked <span>15,495.39 <span className="currency currency-usd">USD</span></span></div>
                                                    <a href="#" className="link"><span>Withdraw Balance</span> <em className="icon ni ni-wallet-out"></em></a>
                                                </div>
                                                <div className="dropdown-inner">
                                                    <ul className="link-list">
                                                        <li><a href="html/invest/profile.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                        <li><a href="html/invest/profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                        <li><a href="html/invest/profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                                        <li><a className="dark-switch" href="#"><em className="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown-inner">
                                                    <ul className="link-list">
                                                        <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-content nk-content-lg nk-content-fluid">
                        <div className="container-xl wide-lg">
                            <div className="nk-content-inner">
                                <div className="nk-content-body">
                                    <div className="nk-block-head">
                                        <div className="nk-block-between-md g-3">
                                            <div className="nk-block-head-content">
                                                <div className="nk-block-head-sub"><span>Welcome!</span></div>
                                                <div className="align-center flex-wrap pb-2 gx-4 gy-3">
                                                    <div>
                                                        <h2 className="nk-block-title fw-normal">Abu Bin Ishtiyak</h2>
                                                    </div>
                                                    <div><a href="html/invest/schemes.html" className="btn btn-white btn-light">My Plans <em className="icon ni ni-arrow-long-right ml-2"></em></a></div>
                                                </div>
                                                <div className="nk-block-des">
                                                    <p>At a glance summary of your investment account. Have fun!</p>
                                                </div>
                                            </div>
                                            <div className="nk-block-head-content d-none d-md-block">
                                                <div className="nk-slider nk-slider-s1">
                                                    <div className="slider-init" data-slick='{"dots": true, "arrows": false, "fade": true}'>
                                                        <div className="slider-item">
                                                            <div className="nk-iv-wg1">
                                                                <div className="nk-iv-wg1-sub sub-text">My Active Plans</div>
                                                                <h6 className="nk-iv-wg1-info title">Silver - 4.76% for 21 Days</h6>
                                                                <a href="#" className="nk-iv-wg1-link link link-light"><em className="icon ni ni-trend-up"></em> <span>Check Details</span></a>
                                                                <div className="nk-iv-wg1-progress">
                                                                    <div className="progress-bar bg-primary" data-progress="80"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="slider-item">
                                                            <div className="nk-iv-wg1">
                                                                <div className="nk-iv-wg1-sub sub-text">My Active Plans</div>
                                                                <h6 className="nk-iv-wg1-info title">Silver - 4.76% for 21 Days</h6>
                                                                <a href="#" className="nk-iv-wg1-link link link-light"><em className="icon ni ni-trend-up"></em> <span>Check Details</span></a>
                                                                <div className="nk-iv-wg1-progress">
                                                                    <div className="progress-bar bg-primary" data-progress="80"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slider-item">
                                                            <div className="nk-iv-wg1">
                                                                <div className="nk-iv-wg1-sub sub-text">My Active Plans</div>
                                                                <h6 className="nk-iv-wg1-info title">Silver - 4.76% for 21 Days</h6>
                                                                <a href="#" className="nk-iv-wg1-link link link-light"><em className="icon ni ni-trend-up"></em> <span>Check Details</span></a>
                                                                <div className="nk-iv-wg1-progress">
                                                                    <div className="progress-bar bg-primary" data-progress="80"></div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                    <div className="slider-dots"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-block">
                                        <div className="nk-news card card-bordered">
                                            <div className="card-inner">
                                                <div className="nk-news-list">
                                                    <a className="nk-news-item" href="#">
                                                        <div className="nk-news-icon">
                                                            <em className="icon ni ni-card-view"></em>
                                                        </div>
                                                        <div className="nk-news-text">
                                                            <p>Do you know the latest update of 2019? <span> A overview of our is now available on YouTube</span></p>
                                                            <em className="icon ni ni-external"></em>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-block">
                                        <div className="row gy-gs">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="nk-wg-card is-dark card card-bordered">
                                                    <div className="card-inner">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">Available Balance <em className="icon ni ni-info"></em></h6>
                                                            </div>
                                                            <div className="nk-iv-wg2-text">
                                                                <div className="nk-iv-wg2-amount"> 105.94 <span className="change up"><span className="sign"></span>3.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="nk-wg-card is-s1 card card-bordered">
                                                    <div className="card-inner">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">Total Invested <em className="icon ni ni-info"></em></h6>
                                                            </div>
                                                            <div className="nk-iv-wg2-text">
                                                                <div className="nk-iv-wg2-amount"> 509,850.90 <span className="change up"><span className="sign"></span>2.8%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <div className="nk-wg-card is-s3 card card-bordered">
                                                    <div className="card-inner">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">Total Profits <em className="icon ni ni-info"></em></h6>
                                                            </div>
                                                            <div className="nk-iv-wg2-text">
                                                                <div className="nk-iv-wg2-amount"> 50,600.48 <span className="change down"><span className="sign"></span>1.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-block">
                                        <div className="row gy-gs">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="nk-wg-card card card-bordered h-100">
                                                    <div className="card-inner h-100">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">Drop N Merge</h6>
                                                            </div>
                                                            {/* <div className="nk-iv-wg2-text">
                                                                <div className="nk-iv-wg2-amount ui-v2">12,587.96</div>
                                                                <ul className="nk-iv-wg2-list">
                                                                    <li>
                                                                        <span className="item-label">Available Funds</span>
                                                                        <span className="item-value">105.94</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label">Invested Funds</span>
                                                                        <span className="item-value">12,582.02</span>
                                                                    </li>
                                                                    <li className="total">
                                                                        <span className="item-label">Total</span>
                                                                        <span className="item-value">12,587.96</span>
                                                                    </li>
                                                                </ul>
                                                            </div> */}
                                                            <div className="nk-iv-wg2-cta">
                                                                <a href="#" className="btn btn-primary btn-lg btn-block">Withdraw Funds</a>
                                                                <a href="#" className="btn btn-trans btn-block">Deposit Funds</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="nk-wg-card card card-bordered h-100">
                                                    <div className="card-inner h-100">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">This Month Profit <em className="icon ni ni-info text-primary"></em></h6>
                                                            </div>
                                                            {/* <div className="nk-iv-wg2-text">
                                                                <div className="nk-iv-wg2-amount ui-v2">1,457.23 <span className="change up"><span className="sign"></span>4.5%</span></div>
                                                                <ul className="nk-iv-wg2-list">
                                                                    <li>
                                                                        <span className="item-label">Profits</span>
                                                                        <span className="item-value">1,045.21</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label">Referrals</span>
                                                                        <span className="item-value">212.02</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label">Rewards</span>
                                                                        <span className="item-value">200.00</span>
                                                                    </li>
                                                                    <li className="total">
                                                                        <span className="item-label">Total Profit</span>
                                                                        <span className="item-value">1,457.23</span>
                                                                    </li>
                                                                </ul>
                                                            </div> */}
                                                            <div className="nk-iv-wg2-cta">
                                                                <a href="#" className="btn btn-primary btn-lg btn-block">Invest & Earn</a>
                                                                <div className="cta-extra">Earn up to 25$ <a href="#" className="link link-dark">Refer friend!</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-4">
                                                <div className="nk-wg-card card card-bordered h-100">
                                                    <div className="card-inner h-100">
                                                        <div className="nk-iv-wg2">
                                                            <div className="nk-iv-wg2-title">
                                                                <h6 className="title">My Investment</h6>
                                                            </div>
                                                            <div className="nk-iv-wg2-text" style={{ color: 'white' }}>
                                                                <div className="nk-iv-wg2-amount ui-v2" style={{ borderColor: 'white'}}>319 <span className="sub">03</span> Active</div>
                                                                <ul className="nk-iv-wg2-list" style={{ color: 'white' }}>
                                                                    <li>
                                                                        <span className="item-label" ><a href="#" style={{ color: 'white' }}>Silver</a> <small style={{ color: 'white' }}>- 4.76% for 21 Days</small></span>
                                                                        <span className="item-value" style={{ color: 'white' }}>2,500.00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label"><a href="#" style={{ color: 'white' }}>Silver</a> <small style={{ color: 'white' }}>- 4.76% for 21 Days</small></span>
                                                                        <span className="item-value" style={{ color: 'white' }}>2,000.00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label"><a href="#" style={{ color: 'white' }}>Dimond</a> <small style={{ color: 'white' }}>- 14.29% for 14 Days</small></span>
                                                                        <span className="item-value" style={{ color: 'white' }}>8,000.00</span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="item-label"><a href="#" style={{ color: 'white' }}>Starter</a> <small style={{ color: 'white' }}>- 1.67% for 30 Days</small></span>
                                                                        <span className="item-value" style={{ color: 'white' }}>335.00</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="nk-iv-wg2-cta">
                                                                <a href="#" className="btn btn-light btn-lg btn-block">See all Investment</a>
                                                                <div className="cta-extra">Check out <a href="#" className="link link-dark">Analytic Report</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nk-block">
                                        <div className="card card-bordered">
                                            <div className="nk-refwg">
                                                <div className="nk-refwg-invite card-inner">
                                                    <div className="nk-refwg-head g-3">
                                                        <div className="nk-refwg-title">
                                                            <h5 className="title">Refer Us & Earn</h5>
                                                            <div className="title-sub">Use the bellow link to invite your friends.</div>
                                                        </div>
                                                        <div className="nk-refwg-action">
                                                            <a href="#" className="btn btn-primary">Invite</a>
                                                        </div>
                                                    </div>
                                                    <div className="nk-refwg-url">
                                                        <div className="form-control-wrap">
                                                            <div className="form-clip clipboard-init" data-clipboard-target="#refUrl" data-success="Copied" data-text="Copy Link"><em className="clipboard-icon icon ni ni-copy"></em> <span className="clipboard-text">Copy Link</span></div>
                                                            <div className="form-icon">
                                                                <em className="icon ni ni-link-alt"></em>
                                                            </div>
                                                            <input type="text" className="form-control copy-text" id="refUrl" defaultValue="https://dashlite.net/?ref=4945KD48" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="nk-refwg-stats card-inner bg-lighter">
                                                    <div className="nk-refwg-group g-3">
                                                        <div className="nk-refwg-name">
                                                            <h6 className="title">My Referral <em className="icon ni ni-info" data-toggle="tooltip" data-placement="right" title="Referral Informations"></em></h6>
                                                        </div>
                                                        <div className="nk-refwg-info g-3">
                                                            <div className="nk-refwg-sub">
                                                                <div className="title">394</div>
                                                                <div className="sub-text">Total Joined</div>
                                                            </div>
                                                            <div className="nk-refwg-sub">
                                                                <div className="title">548.49</div>
                                                                <div className="sub-text">Referral Earn</div>
                                                            </div>
                                                        </div>
                                                        <div className="nk-refwg-more dropdown mt-n1 mr-n1">
                                                            <a href="#" className="btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                                                                <ul className="link-list-plain sm">
                                                                    <li><a href="#">7 days</a></li>
                                                                    <li><a href="#">15 Days</a></li>
                                                                    <li><a href="#">30 Days</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="nk-refwg-ck">
                                                        <canvas className="chart-refer-stats" id="refBarChart"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nk-footer nk-footer-fluid bg-lighter">
                        <div className="container-xl wide-lg">
                            <div className="nk-footer-wrap">
                                <div className="nk-footer-copyright"> &copy; 2021 DashLite. Template by <a href="#">Softnio</a>
                                </div>
                                <div className="nk-footer-links">
                                    <ul className="nav nav-sm">
                                        <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
