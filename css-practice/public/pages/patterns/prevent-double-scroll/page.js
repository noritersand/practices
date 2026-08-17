document.addEventListener('DOMContentLoaded', () => {
  const openModalBtnArr = document.querySelectorAll('[data-open-modal-btn]');
  const closeModalBtn = document.querySelector('#closeModalBtn');
  const modalOverlay = document.querySelector('#modalOverlay');

  // 스크롤바 폭 계산 함수 (Layout Shift 방지용)
  const getScrollbarWidth = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const openModal = () => {
    const scrollbarWidth = getScrollbarWidth();

    // 스크롤바 폭만큼 body padding-right 추가하여 덜컥거림 방지
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.classList.add('modal-open');
    modalOverlay.classList.add('is-active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    modalOverlay.classList.remove('is-active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  };

  openModalBtnArr?.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });
  closeModalBtn?.addEventListener('click', closeModal);

  // dimmed 레이어 클릭 시 닫기
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // ESC 키 누를 때 모달 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay?.classList.contains("is-active")) {
      closeModal();
    }
  });
});
