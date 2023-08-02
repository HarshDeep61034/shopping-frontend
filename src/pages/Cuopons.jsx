import React from 'react'

const CouponCodes = [
    'AB12CD34',
    'EF56GH78',
    'IJ90KL12',
    'MN34OP56',
    'QR78ST90',
    'UV12WX34',
    'YZ56AB78',
    'CD90EF12',
    'GH34IJ56',
    'KL78MN90',
  ];

function Coupons() {
      const couponlist = CouponCodes.map((item)=>(
        <p>{item}</p>
      ))
  return (
    <>
    {couponlist}
    </>
  )
}

export {Coupons, CouponCodes}