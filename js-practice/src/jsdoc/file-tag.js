/**
 * @file
 *  <p>등/하교 내역 상세 팝업 컴포넌트</p>
 *  <p>등하교내역조회: 일간/주간/월간(school-checkin-histories-tab-[daily/weekly/monthly].jsp 화면에서 사용함</p>
 * @author fixalot
 * @since 2023-10-13
 */

/**
 * 훌라훌라 훌라
 * @returns {{val: {memo: null}, entrantName: null, updaterStr: null, isCheckedOut: null, companyName: null, phoneNo: null, roomName: null, updateDtYmdStr: null, checkoutPlaceName: null, isManualCheckin: null, memberTypeCode2: null, checkinDtYmdHiStr: null, checkinPlaceName: null, isManualCheckout: null, manualCheckinApplierName: null, grade: null, totalClassTimeHiKr: null, manualCheckoutApplierName: null, majorName: null, checkinDateStr: null, checkoutDtYmdHiStr: null}}
 */
function initializeState() {
  return {
    entrantName: null,
    grade: null,
    phoneNo: null,
    memberTypeCode2: null,
    majorName: null,
    roomName: null,
    companyName: null,
    updateDtYmdStr: null,
    updaterStr: null,
    totalClassTimeHiKr: null,
    isCheckedOut: null,
    checkinDtYmdHiStr: null,
    checkoutDtYmdHiStr: null,
    isManualCheckin: null,
    isManualCheckout: null,
    checkinPlaceName: null,
    checkoutPlaceName: null,
    checkinDateStr: null,
    manualCheckinApplierName: null,
    manualCheckoutApplierName: null,
    val: {
      memo: null
    }
  };
}
